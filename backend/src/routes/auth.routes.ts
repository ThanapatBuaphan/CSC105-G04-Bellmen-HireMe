import { Router } from "express";
import {
  companyRegister,
  login,
  userRegister,
  checkEmail,
  checkPhone,
  checkCompanyName
} from "../controllers/auth.controller"

const router = Router();

// POST /auth/register/user
router.post( "/register/user", userRegister );


// POST /auth/register/company
router.post( "/register/company", companyRegister);


//POST /auth/login
router.post( "/login", login);

router.get("/check-email", checkEmail);
router.get("/check-phone", checkPhone);
router.get("/check-company-name", checkCompanyName);

export default router;
