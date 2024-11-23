import express from 'express';
import Cart from '../models/Cart.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Obtener carrito
router.get('/', verifyToken, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Agregar item al carrito
router.post('/items', verifyToken, async (req, res) => {
  try {
    const { productId, titulo, imagen, precio } = req.body;
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ productId, titulo, imagen, precio, quantity: 1 });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Actualizar cantidad de item
router.put('/items/:productId', verifyToken, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id });

    const itemIndex = cart.items.findIndex(
      item => item.productId === parseInt(req.params.productId)
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Item no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Eliminar item del carrito
router.delete('/items/:productId', verifyToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    cart.items = cart.items.filter(
      item => item.productId !== parseInt(req.params.productId)
    );
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Limpiar carrito
router.delete('/', verifyToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    cart.items = [];
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

export default router;