const express = require("express");
const {
  verifyToken,
  verifyTokenById,
  verifyTokenByRoleAdminOrCandidate,
  verifyTokenByRoleAdminOrHeadhunter,
} = require("./middleware/securityMiddleware");

const router = express.Router();
const upload = require("./services/UploadHelper");

const candidateControllers = require("./controllers/candidateControllers");

const loginController = require("./controllers/authControllers/LoginController");

router.post("/login", loginController);

router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.put(
  "/candidate/:id",
  verifyToken,
  verifyTokenByRoleAdminOrCandidate,
  candidateControllers.edit
);
router.post(
  "/candidate",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "lm", maxCount: 1 },
    { name: "avatar", maxCount: 1 },
  ]),
  candidateControllers.add
);
router.delete(
  "/candidate/:id",
  verifyToken,
  verifyTokenByRoleAdminOrCandidate,
  candidateControllers.destroy
);

const companyControllers = require("./controllers/companyControllers");

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.put(
  "/company/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  companyControllers.edit
);
router.post(
  "/company",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  companyControllers.add
);
router.delete(
  "/company/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  companyControllers.destroy
);

const headhunterControllers = require("./controllers/headhunterControllers");

router.get("/headhunter", headhunterControllers.browse);
router.get("/headhunter/:id", headhunterControllers.read);
router.put(
  "/headhunter/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  headhunterControllers.edit
);
router.post("/headhunter", upload.single("photo"), headhunterControllers.add);
router.delete(
  "/headhunter/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  headhunterControllers.destroy
);

const jobApplicationsControllers = require("./controllers/jobApplicationsControllers");

router.get("/job_applications", jobApplicationsControllers.browse);
router.get("/job_applications/:id", jobApplicationsControllers.read);
router.put(
  "/job_applications/:id",
  verifyToken,
  verifyTokenByRoleAdminOrCandidate,
  jobApplicationsControllers.edit
);
router.post(
  "/job_applications",
  verifyToken,
  verifyTokenByRoleAdminOrCandidate,
  jobApplicationsControllers.add
);
router.delete("/job_applications/:id", jobApplicationsControllers.destroy);

const jobOffersControllers = require("./controllers/jobOffersControllers");

router.get("/job_offers", jobOffersControllers.browse);
router.get("/job_offers/:id", jobOffersControllers.read);
router.put(
  "/job_offers/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  jobOffersControllers.edit
);
router.post(
  "/job_offers",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  jobOffersControllers.add
);
router.delete(
  "/job_offers/:id",
  verifyToken,
  verifyTokenByRoleAdminOrHeadhunter,
  jobOffersControllers.destroy
);

const userControllers = require("./controllers/userControllers");

router.get("/userCandidate", userControllers.getCandidate);
router.get("/userCandidate/:id", userControllers.getOneCandidate);
router.get("/userHeadhunter", userControllers.getHeadhunter);
router.get("/userHeadhunter/:id", userControllers.getOneHeadhunter);

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", verifyToken, verifyTokenById, userControllers.edit);
router.post("/user", userControllers.add);
router.delete(
  "/user/:id",
  verifyToken,
  verifyTokenById,
  userControllers.destroy
);

module.exports = router;
