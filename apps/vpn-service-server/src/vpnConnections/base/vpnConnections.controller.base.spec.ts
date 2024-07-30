import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VpnConnectionsController } from "../vpnConnections.controller";
import { VpnConnectionsService } from "../vpnConnections.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  connectionTime: new Date(),
  createdAt: new Date(),
  disconnectionTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  connectionTime: new Date(),
  createdAt: new Date(),
  disconnectionTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    connectionTime: new Date(),
    createdAt: new Date(),
    disconnectionTime: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  connectionTime: new Date(),
  createdAt: new Date(),
  disconnectionTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createVpnConnections() {
    return CREATE_RESULT;
  },
  vpnConnectionsItems: () => FIND_MANY_RESULT,
  vpnConnections: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VpnConnections", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VpnConnectionsService,
          useValue: service,
        },
      ],
      controllers: [VpnConnectionsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /vpnConnections", async () => {
    await request(app.getHttpServer())
      .post("/vpnConnections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        connectionTime: CREATE_RESULT.connectionTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        disconnectionTime: CREATE_RESULT.disconnectionTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /vpnConnections", async () => {
    await request(app.getHttpServer())
      .get("/vpnConnections")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          connectionTime: FIND_MANY_RESULT[0].connectionTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          disconnectionTime:
            FIND_MANY_RESULT[0].disconnectionTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /vpnConnections/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vpnConnections"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /vpnConnections/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vpnConnections"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        connectionTime: FIND_ONE_RESULT.connectionTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        disconnectionTime: FIND_ONE_RESULT.disconnectionTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /vpnConnections existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/vpnConnections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        connectionTime: CREATE_RESULT.connectionTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        disconnectionTime: CREATE_RESULT.disconnectionTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/vpnConnections")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
