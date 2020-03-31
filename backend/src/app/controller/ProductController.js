const connection = require('../../database/connection');

module.exports = {

  async create(req, res){
    const {title, description, value, avaiable} = req.body;
    const company_id = req.headers.authorization; 
    

    const [id] = await connection('products').insert({
      title,
      description,
      value,
      avaiable,
      company_id, 
    });
    
    return res.status(200).json({id}); 
  },

  async index(req, res){
    const {page = 1} = req.query; 
    const [count]  = await connection('products').count(); 

    const products = await connection('products')
    .join('companys', 'company.id', '=', 'product.ong_id')
    .limit(5)
    .offset((page-1)*5)
    .select([
      'company.*',
      'company.name',
      'company.email',
      'company.whatsapp',
      'company.city',
      'company.uf'
    ]);
    
    res.header('X-Total-Count', count['count(*)']); 
    return res.json(products);
  }, 


  async delete(req, res){
      const {id} = req.params;
      const product_id = req.headers.authorization;

      const product = await connection('products')
          .where('id', id)
          .select('company_id')
          .first();

      if(incident.company_id != company_id){
        return res.status(401).json({error:'Sem autorização'});
      }

      await connection('company').where('id', id).delete();

      return res.status(204).send(); 

  }
}; 