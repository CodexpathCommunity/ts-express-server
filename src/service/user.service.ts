import { DocumentDefinition } from "mongoose";

import User, { UserDocument } from "../model/user.model";

export async function createUser(user: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(user);
  } catch (error: any) {
    throw new Error(error);
  }
}
