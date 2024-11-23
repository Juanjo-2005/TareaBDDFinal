import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Registro
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Crear nuevo usuario
    const user = new User({ nombre, email, password });
    await user.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Verificar contraseña
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Actualizar perfil
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const { nombre, currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    if (currentPassword) {
      const isValid = await user.comparePassword(currentPassword);
      if (!isValid) {
        return res.status(400).json({ message: 'Contraseña actual incorrecta' });
      }
      user.password = newPassword;
    }

    user.nombre = nombre;
    await user.save();

    res.json({ message: 'Perfil actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Eliminar cuenta
router.delete('/profile', verifyToken, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: 'Cuenta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

export default router;