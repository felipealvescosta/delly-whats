const connection = require('../../database/connection');

module.exports = {
  async create(req, res){

    const {email, password} = req.body;

    const company = await connection('companys')
      .where({
        email,
        password
      })
      .select('name', 'id')
      .first();

      if(!company){
        return res.status(401).json({error:'Nenhuma empresa encontrada para esse email'});
      }
       return res.json(company);

  }
};