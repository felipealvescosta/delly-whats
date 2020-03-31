const generateUniqueId = require('../../utils/generateUniqueId'); 
const connection = require('../../database/connection');

module.exports = {

  async create(req, res){
    const {name, email, password, whatsapp, city, uf} = req.body;
    const id = generateUniqueId(); 
    const company =  await connection('companys').insert({
      id,
      name,
      email,
      password,
      whatsapp, 
      city, 
      uf, 
    });
    
    return res.status(200).json({message:"Empresa cadastrada com sucesso!"}); 
  },

  async show(req, res){
      const {company_id} = req.params;

      const companys = await connection('companys').where('id', company_id);

      return res.json(companys);
  }, 

  async index(req, res){
    const companys = await connection('companys').select('*');
    return res.json(companys);
  }, 

  async update(req, res){
    const {company_id} = req.params;
    const {name, email, password, whatsapp, city, uf} = req.body;

    const company =  await connection('companys')
    .where('id', company_id)
    .update({
      name,
      email,
      password,
      whatsapp, 
      city, 
      uf, 
    });
    
    return res.status(200).json(company); 
  },

  async delete(req, res){
    const {company_id} = req.params;

    const companys = await connection('companys')
        .where('id', company_id)
        .del();

    return res.status(200).json({message:"Empresa excluída com sucesso!"});
  }, 

}; 