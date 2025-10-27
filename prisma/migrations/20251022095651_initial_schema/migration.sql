-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NULL,
    `content` TEXT NULL,
    `mini_content` TEXT NULL,
    `feature_img` VARCHAR(191) NULL,
    `max` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Blog_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NULL,

    UNIQUE INDEX `Cat_name_key`(`name`),
    UNIQUE INDEX `Cat_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    UNIQUE INDEX `Tag_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseStudy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wordpress_id` TEXT NULL,
    `Title` TEXT NULL,
    `Card_Image_Url` VARCHAR(255) NULL,
    `Header` VARCHAR(255) NULL,
    `Testimonial_Quote` TEXT NULL,
    `Author_Name` VARCHAR(255) NULL,
    `Client_Name` VARCHAR(255) NULL,
    `Company_Name` VARCHAR(255) NULL,
    `Company_Image_url` VARCHAR(255) NULL,
    `Card_Title` VARCHAR(255) NULL,
    `Category` VARCHAR(255) NULL,
    `Challenges` TEXT NULL,
    `Results` TEXT NULL,
    `Overview` TEXT NULL,
    `Card_Description` TEXT NULL,
    `Meta_Description` TEXT NULL,
    `Industry` VARCHAR(255) NULL,
    `Locations` VARCHAR(255) NULL,
    `Employees` VARCHAR(255) NULL,
    `Product` VARCHAR(255) NULL,
    `Service_Time` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wordpress_id` TEXT NOT NULL,
    `main_title` TEXT NULL,
    `Dynamic_Fields` TEXT NULL,
    `Document_Sign` TEXT NULL,
    `Onfra-X_App_Access` TEXT NULL,
    `QR_Checkin` TEXT NULL,
    `Auto_Print` TEXT NULL,
    `Invite1` TEXT NULL,
    `Bulk_Invite` TEXT NULL,
    `Recurring_Checkin` TEXT NULL,
    `Photo_Capture3` TEXT NULL,
    `Host_Approval` TEXT NULL,
    `Custom_Filters` TEXT NULL,
    `Device_Custom_Message` TEXT NULL,
    `Visitor_Pass_Customization` TEXT NULL,
    `Auto_Checkout` TEXT NULL,
    `Business_Card_Scanning` TEXT NULL,
    `Device_Color_Customization` TEXT NULL,
    `Daily_Report` TEXT NULL,
    `Weekly_Report` TEXT NULL,
    `Monthly_Report` TEXT NULL,
    `Yearly_Report` TEXT NULL,
    `OTP_Verification` TEXT NULL,
    `QR_Checkout` TEXT NULL,
    `National-ID_Scan` TEXT NULL,
    `AI-QR_Image` TEXT NULL,
    `ID-Print_Templates` TEXT NULL,
    `Visitor_Host-Otp_Verify` TEXT NULL,
    `Visitor_Alert_Notification` TEXT NULL,
    `Visitor_Quick_Checkin` TEXT NULL,
    `Appointments/Pre-Register` TEXT NULL,
    `Visitor_QR-Scan_for_Secondary_Checkins` TEXT NULL,
    `Visitor_Photo_Upload` TEXT NULL,
    `Multi_Approval_System` TEXT NULL,
    `Host_Notification1` TEXT NULL,
    `Visitor_Welcome_Message` TEXT NULL,
    `Employee_Checkins` TEXT NULL,
    `Employee_Location_Tracker` TEXT NULL,
    `Easy_Recruitment` TEXT NULL,
    `Attendance_Tracker` TEXT NULL,
    `Photo_Capture4` TEXT NULL,
    `Leaves_Tracker` TEXT NULL,
    `Employee_Quick_Checkin` TEXT NULL,
    `Employee_Geo_Fencing` TEXT NULL,
    `Employee_Report_pdf/excel2` TEXT NULL,
    `Mobile_for_Checkin` TEXT NULL,
    `Mobile_for_Leave_Request` TEXT NULL,
    `Report_pdf/excel1` TEXT NULL,
    `Member_Passes_with_restrictions` TEXT NULL,
    `Member_Approval_Flow` TEXT NULL,
    `Member_Checkin` TEXT NULL,
    `Photo_Capture1` TEXT NULL,
    `FlexiPass_Quick_Checkin` TEXT NULL,
    `Mobile_for_host_verification1` TEXT NULL,
    `Easy_Recording_Process` TEXT NULL,
    `Digital_Delivery_Log` TEXT NULL,
    `Secure_Pickup` TEXT NULL,
    `Photo_Capture2` TEXT NULL,
    `Mobile_for_host_verification2` TEXT NULL,
    `Host_Notification2` TEXT NULL,
    `Report_pdf/excel3` TEXT NULL,
    `Rooms` TEXT NULL,
    `Meeting` TEXT NULL,
    `Smart_Filters` TEXT NULL,
    `Calendar_View` TEXT NULL,
    `External_Invite` TEXT NULL,
    `Conflict_Meetings_Config` TEXT NULL,
    `Meeting_Approvals` TEXT NULL,
    `Recurring_Meeting` TEXT NULL,
    `MoM` TEXT NULL,
    `Mobile_For_Users` TEXT NULL,
    `Google_Sync` TEXT NULL,
    `Outlook_Sync` TEXT NULL,
    `External_Meeting_Link_Generation` TEXT NULL,
    `Room/Meeting_Displays` TEXT NULL,
    `Walk-In_Booking` TEXT NULL,
    `Multi-Language_Secure_Display` TEXT NULL,
    `Passes` TEXT NULL,
    `Checkins` TEXT NULL,
    `Dynamic_Items` TEXT NULL,
    `Pass_Approval_Flow` TEXT NULL,
    `Pass_Print_Template` TEXT NULL,
    `Material_Checkin_Photo_Capture` TEXT NULL,
    `Report_pdf/excel4` TEXT NULL,
    `Counters` TEXT NULL,
    `Tokens` TEXT NULL,
    `Multi_Secure_Display_View` TEXT NULL,
    `Real_Time_Updates1` TEXT NULL,
    `Staff_Feedback` TEXT NULL,
    `Report_(Pdf/Excel)` TEXT NULL,
    `Visitor_Module_Integration` TEXT NULL,
    `Notifications` TEXT NULL,
    `Multi_Layout_Secure_Displays` TEXT NULL,
    `Multi_Widgets` TEXT NULL,
    `Image_Slideshows` TEXT NULL,
    `Real_Time_Updates2` TEXT NULL,
    `page_title` TEXT NULL,
    `page_description` TEXT NULL,
    `img_url` TEXT NULL,
    `Title` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faq` (
    `id` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `Question` TEXT NOT NULL,
    `Answer` LONGTEXT NOT NULL,
    `order` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryWorkplaceData` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `country_code` VARCHAR(10) NOT NULL,
    `country_data` LONGTEXT NOT NULL,
    `country_market_data` LONGTEXT NOT NULL,

    UNIQUE INDEX `CountryWorkplaceData_country_code_key`(`country_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimonial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `position` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `img` VARCHAR(500) NULL,
    `category` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `Title` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BlogToCat` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BlogToCat_AB_unique`(`A`, `B`),
    INDEX `_BlogToCat_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BlogToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BlogToTag_AB_unique`(`A`, `B`),
    INDEX `_BlogToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BlogToCat` ADD CONSTRAINT `_BlogToCat_A_fkey` FOREIGN KEY (`A`) REFERENCES `Blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BlogToCat` ADD CONSTRAINT `_BlogToCat_B_fkey` FOREIGN KEY (`B`) REFERENCES `Cat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BlogToTag` ADD CONSTRAINT `_BlogToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BlogToTag` ADD CONSTRAINT `_BlogToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
