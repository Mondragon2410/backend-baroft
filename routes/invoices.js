const { Router } = require ('express');

const invoices = require('../controllers/invoices');



const router = Router();

router.get('/', invoices.getInvoices );
router.post('/', invoices.createInvoice);
router.get('/:id', invoices.getInvoice);
router.put('/:id', invoices.editInvoice);
router.delete('/:id', invoices.deleteInvoice);

 


module.exports = router;