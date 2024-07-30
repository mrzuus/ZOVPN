/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Admin as PrismaAdmin } from "@prisma/client";
import { RegisterAdminInput } from "../RegisterAdminInput";
import { Admin } from "./Admin";

export class AdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AdminCountArgs, "select">): Promise<number> {
    return this.prisma.admin.count(args);
  }

  async admins(args: Prisma.AdminFindManyArgs): Promise<PrismaAdmin[]> {
    return this.prisma.admin.findMany(args);
  }
  async admin(args: Prisma.AdminFindUniqueArgs): Promise<PrismaAdmin | null> {
    return this.prisma.admin.findUnique(args);
  }
  async createAdmin(args: Prisma.AdminCreateArgs): Promise<PrismaAdmin> {
    return this.prisma.admin.create(args);
  }
  async updateAdmin(args: Prisma.AdminUpdateArgs): Promise<PrismaAdmin> {
    return this.prisma.admin.update(args);
  }
  async deleteAdmin(args: Prisma.AdminDeleteArgs): Promise<PrismaAdmin> {
    return this.prisma.admin.delete(args);
  }
  async RegisterAdminWithToken(args: RegisterAdminInput): Promise<Admin> {
    throw new Error("Not implemented");
  }
}
