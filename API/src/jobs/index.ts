const debug = require('debug')('Jobs'); debug.enabled = true;
import { BcryptService } from "../services/bcrypt";

import { User } from "../models/User";

export class Jobs {
  async createFirstUser() {
    const username = "desafiosharenergy";
    const password = "sh@r3n3rgy";
    const hash = await BcryptService.hashPassword(password);
    
    try {
      await User.updateOne(
        { username },
        { username, password: hash },
        { upsert: true }
      );
      debug('Usuário inicial cadastrado com sucesso');
    }
    catch (err) {
      debug(err)
      debug('Erro no cadastro de usuário inicial');
    }
  }
}