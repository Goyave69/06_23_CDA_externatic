-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: db_externatic
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidate`
--

DROP TABLE IF EXISTS `candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number_of_applications` int NOT NULL,
  `favorites_offer_jobs` int NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `profile_description` varchar(1000) NOT NULL,
  `researched_job` varchar(255) NOT NULL,
  `job_search_location` varchar(255) NOT NULL,
  `availability_date` date NOT NULL,
  `skills` varchar(255) NOT NULL,
  `languages` varchar(255) NOT NULL,
  `is_admin` tinyint NOT NULL,
  `cv_url` varchar(1000) NOT NULL,
  `motivation_letter_url` varchar(1000) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_candidate_user1_idx` (`user_id`),
  CONSTRAINT `fk_candidate_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate`
--

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
INSERT INTO `candidate` VALUES (1,3,2,'Software Engineer','IT','Experienced software engineer specializing in web development.','Full Stack Developer','New York','2023-06-30','JavaScript, HTML, CSS','English, Spanish',1,'https://example.com/cv1','https://example.com/motivation_letter1',1),(2,1,0,'Marketing Specialist','Marketing','Marketing professional with expertise in digital marketing strategies.','Digital Marketing Manager','London','2023-07-15','SEO, PPC, Social Media Marketing','English, French',0,'https://example.com/cv2','https://example.com/motivation_letter2',2),(3,2,1,'Graphic Designer','Design','Creative graphic designer with a passion for visual storytelling.','Graphic Design Lead','San Francisco','2023-07-10','Adobe Creative Suite, Illustration','English',0,'https://example.com/cv3','https://example.com/motivation_letter3',3),(4,4,3,'Project Manager','Management','Experienced project manager with a track record of successfully leading cross-functional teams.','Senior Project Manager','Berlin','2023-07-05','Project Management, Team Leadership','English, German',0,'https://example.com/cv4','https://example.com/motivation_letter4',6);
/*!40000 ALTER TABLE `candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `industry_field` varchar(255) DEFAULT NULL,
  `photo_url` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'ABC Corp','123 Main St','555-1234','info@abccorp.com','A leading technology company','Technology','https://example.com/abc_logo.jpg'),(2,'XYZ Industries','456 Elm St','555-5678','contact@xyzindustries.com','Manufacturing and distribution','Manufacturing','https://example.com/xyz_logo.jpg'),(3,'Global Services Ltd','789 Oak St','555-9090','info@globalservices.com','International consulting firm','Consulting','https://example.com/global_logo.jpg'),(4,'Swift Logistics','321 Pine St','555-2468','hello@swiftlogistics.com','Supply chain management solutions','Logistics','https://example.com/swift_logo.jpg'),(5,'Sunrise Bank','654 Cedar St','555-1357','info@sunrisebank.com','Full-service banking institution','Finance','https://example.com/sunrise_logo.jpg'),(6,'Nature\'s Harvest','987 Birch St','555-6789','info@naturesharvest.com','Organic food products','Food and Beverage','https://example.com/naturesharvest_logo.jpg');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headhunter`
--

DROP TABLE IF EXISTS `headhunter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headhunter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skills_area` varchar(255) DEFAULT NULL,
  `research_sector` varchar(255) DEFAULT NULL,
  `is_admin` tinyint NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_headhunter_user1_idx` (`user_id`),
  CONSTRAINT `fk_headhunter_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headhunter`
--

LOCK TABLES `headhunter` WRITE;
/*!40000 ALTER TABLE `headhunter` DISABLE KEYS */;
INSERT INTO `headhunter` VALUES (1,'Some Skill Area','Some research sector',0,4),(2,'Some Skill Area','Some research sector',0,5);
/*!40000 ALTER TABLE `headhunter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headhunter_companies`
--

DROP TABLE IF EXISTS `headhunter_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headhunter_companies` (
  `headhunter_id` int NOT NULL,
  `headhunter_user_id` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`headhunter_id`,`headhunter_user_id`,`company_id`),
  KEY `fk_headhunter_has_company_company1_idx` (`company_id`),
  KEY `fk_headhunter_has_company_headhunter1_idx` (`headhunter_id`,`headhunter_user_id`),
  CONSTRAINT `fk_headhunter_has_company_company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_headhunter_has_company_headhunter1` FOREIGN KEY (`headhunter_id`, `headhunter_user_id`) REFERENCES `headhunter` (`id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headhunter_companies`
--

LOCK TABLES `headhunter_companies` WRITE;
/*!40000 ALTER TABLE `headhunter_companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `headhunter_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` int NOT NULL,
  `date` date NOT NULL,
  `job_offers_id` int NOT NULL,
  `candidate_id` int NOT NULL,
  PRIMARY KEY (`id`,`job_offers_id`,`candidate_id`),
  KEY `fk_job_applications_job_offers1_idx` (`job_offers_id`),
  KEY `fk_job_applications_candidate1_idx` (`candidate_id`),
  CONSTRAINT `fk_job_applications_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_job_applications_job_offers1` FOREIGN KEY (`job_offers_id`) REFERENCES `job_offers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
INSERT INTO `job_applications` VALUES (1,0,'2023-06-12',1,1),(2,1,'2023-06-13',2,2),(3,0,'2023-06-14',3,3),(4,1,'2023-06-15',4,4),(5,1,'2023-06-16',5,1),(6,0,'2023-06-17',6,2),(7,1,'2023-06-18',7,3),(8,0,'2023-06-19',8,4),(9,1,'2023-06-20',9,1),(10,0,'2023-06-21',10,2),(11,1,'2023-06-22',11,3),(12,0,'2023-06-23',12,4),(13,1,'2023-06-24',13,1),(14,0,'2023-06-25',14,2),(15,1,'2023-06-26',1,3);
/*!40000 ALTER TABLE `job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_offers`
--

DROP TABLE IF EXISTS `job_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_offers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `job_description` varchar(1000) NOT NULL,
  `status` int NOT NULL,
  `publication_date` date NOT NULL,
  `contract_type` varchar(150) NOT NULL,
  `salary_min` decimal(10,0) DEFAULT NULL,
  `salary_max` decimal(10,0) DEFAULT NULL,
  `headhunter_id` int NOT NULL,
  PRIMARY KEY (`id`,`headhunter_id`),
  KEY `fk_job_offers_headhunter1_idx` (`headhunter_id`),
  CONSTRAINT `fk_job_offers_headhunter1` FOREIGN KEY (`headhunter_id`) REFERENCES `headhunter` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_offers`
--

LOCK TABLES `job_offers` WRITE;
/*!40000 ALTER TABLE `job_offers` DISABLE KEYS */;
INSERT INTO `job_offers` VALUES (1,'Job Offer 1','Location 1','Job Description 1',0,'2023-06-01','Contract Type 1',50000,70000,1),(2,'Job Offer 2','Location 2','Job Description 2',0,'2023-06-02','Contract Type 2',60000,80000,1),(3,'Job Offer 3','Location 3','Job Description 3',0,'2023-06-03','Contract Type 3',70000,90000,1),(4,'Job Offer 4','Location 4','Job Description 4',0,'2023-06-04','Contract Type 4',80000,100000,1),(5,'Job Offer 5','Location 5','Job Description 5',0,'2023-06-05','Contract Type 5',90000,110000,1),(6,'Job Offer 6','Location 6','Job Description 6',0,'2023-06-06','Contract Type 6',100000,120000,1),(7,'Job Offer 7','Location 7','Job Description 7',0,'2023-06-07','Contract Type 7',110000,130000,1),(8,'Job Offer 8','Location 8','Job Description 8',0,'2023-06-08','Contract Type 8',120000,140000,1),(9,'Job Offer 9','Location 9','Job Description 9',0,'2023-06-09','Contract Type 9',130000,150000,1),(10,'Job Offer 10','Location 10','Job Description 10',0,'2023-06-10','Contract Type 10',140000,160000,1),(11,'Job Offer 11','Location 11','Job Description 11',0,'2023-06-01','Contract Type 1',50000,70000,2),(12,'Job Offer 12','Location 12','Job Description 12',0,'2023-06-02','Contract Type 2',60000,80000,2),(13,'Job Offer 13','Location 13','Job Description 13',0,'2023-06-03','Contract Type 3',70000,90000,2),(14,'Job Offer 14','Location 14','Job Description 14',0,'2023-06-04','Contract Type 4',80000,100000,2),(15,'Job Offer 15','Location 15','Job Description 15',0,'2023-06-05','Contract Type 5',90000,110000,2);
/*!40000 ALTER TABLE `job_offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `role` json DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photo_url` varchar(1000) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `subscription_date` date NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'password1','{\"role\": \"admin\"}','John','Doe','1990-01-01','123456789','john.doe@example.com','https://example.com/photo1.jpg','123 Main St','2023-01-01',1),(2,'password2','{\"role\": \"candidate\"}','Jane','Smith','1995-02-02','987654321','jane.smith@example.com','https://example.com/photo2.jpg','456 Elm St','2023-01-02',2),(3,'password3','{\"role\": \"candidate\"}','David','Johnson','1985-03-03','555555555','david.johnson@example.com','https://example.com/photo3.jpg','789 Oak St','2023-01-03',1),(4,'password4','{\"role\": \"headhunter\"}','Sarah','Williams','1992-04-04','111111111','sarah.williams@example.com','https://example.com/photo4.jpg','321 Pine St','2023-01-04',2),(5,'password5','{\"role\": \"headhunter\"}','Michael','Brown','1988-05-05','999999999','michael.brown@example.com','https://example.com/photo5.jpg','654 Cedar St','2023-01-05',1),(6,'password6','{\"role\": \"candidate\"}','Emily','Davis','1997-06-06','444444444','emily.davis@example.com','https://example.com/photo6.jpg','987 Birch St','2023-01-06',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14 11:46:19
