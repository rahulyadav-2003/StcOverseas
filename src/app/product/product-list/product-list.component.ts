import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


 products = [
  {
    name: 'Tasva AIS 140',
    // price: 3999,
    imageUrl: 'assets/images/tasva140.png',
    trackingType: 'Real-time + History',
    // batteryLife: '7 Days Standby',
    connectivity: '2G + SMS + App',
    warranty: '1 Year',
    description: 'Advanced GPS tracker suitable for vehicles and personal use with geo-fencing, real-time tracking, and mobile app integration.'
  },
  {
    name: 'MDVR GPS Tracker with Camera',
    price: 7499,
    imageUrl: 'assets/images/MdvrCam.png',
    trackingType: 'Live Video & GPS Tracking',
    batteryLife: 'Vehicle Powered',
    connectivity: '4G + App + Web Portal',
    warranty: '1 Year',
    description: 'Advanced MDVR solution with live video streaming, GPS tracking, multiple camera support, and mobile/web monitoring for commercial fleet and personal vehicles.'
  }
  // ,
  // {
  //   name: 'STC-Series 4G AI Dashcam',
  //   // price: 8499,
  //   imageUrl: 'assets/images/20.png',
  //   trackingType: 'Live Video + GPS Tracking',
  //   batteryLife: 'Vehicle Powered',
  //   connectivity: '4G + Wi-Fi + App + Web Portal',
  //   warranty: '1 Year',
  //   description: 'Smart AI-powered dashcam with 4G connectivity, real-time video streaming, GPS tracking, driver behavior analysis, and cloud storage support for fleet and personal vehicle safety.'
  // }
  ,
  {
      name: 'STC Series 4CH 4G AI HD Dashcam',
    // price: 13999,
    imageUrl: 'assets/images/z2DashCam.webp',
    trackingType: 'Live Video + GPS Tracking',
    batteryLife: 'Vehicle Powered',
    connectivity: '4G + Wi-Fi + App + Web Portal',
    warranty: '1 Year',
    description: 'High-end 4-channel AI-powered HD dashcam with 4G connectivity, real-time video streaming, GPS tracking, advanced driver assistance system (ADAS), and cloud integration for fleet and personal vehicle security.'
  }
  ,
  {
      name: 'Tasva Speed Limiter Device',
    // price: 3499,
    imageUrl: 'assets/images/02.png',
    trackingType: 'Speed Control + Optional GPS Tracking',
    batteryLife: 'Vehicle Powered',
    connectivity: 'Wired Installation',
    warranty: '1 Year',
    description: 'Electronic speed limiter for vehicles to ensure compliance with government regulations. Supports precise speed control and optional GPS tracking for commercial and passenger vehicles.'
  }
  ,
  {
      name: 'Vehicle Wiring Harness',
    // price: 499,
    imageUrl: 'assets/images/wiring.jpg',
    trackingType: 'N/A',
    batteryLife: 'N/A',
    connectivity: 'Wired Connection',
    warranty: '6 Months',
    description: 'Durable and reliable wiring harness designed for vehicle GPS trackers, dashcams, and other electronic installations. Ensures safe and organized electrical connections for automotive applications.'
  }
  ,
  {
    name: 'STC GPS Tracker',
    // price: 2499,
    imageUrl: 'assets/images/pt06.png',
    trackingType: 'Live GPS Tracking',
    batteryLife: '3–5 Days',
    connectivity: '2G + Mobile App',
    warranty: '1 Year',
    description: 'Compact and portable GPS tracker ideal for personal use, vehicles, and assets. Features real-time location tracking, geo-fencing, and alerts via mobile app with reliable 4G connectivity.'
  }
    ,
  {
      name: 'Vehicle Panic Switch',
    // price: 399,
    imageUrl: 'assets/images/panicButton.png',
    trackingType: 'N/A',
    batteryLife: 'Vehicle Powered',
    connectivity: 'Wired Trigger',
    warranty: '1 Year',
    description: 'Emergency panic button designed for vehicles to send instant SOS alerts when triggered. Integrates with GPS tracking systems or MDVRs to enhance passenger and driver safety.'
  }
    ,
  {
      name: 'iTriangle GPS Tracker',
    price: 2399,
    imageUrl: 'assets/images/itriangle.webp',
    trackingType: 'Live GPS Tracking',
    batteryLife: '3–5 Days',
    connectivity: '4G + Mobile App',
    warranty: '1 Year',
    description: 'Compact GPS tracking device by iTriangle suitable for vehicles, individuals, and assets. Offers real-time location tracking, geo-fencing, and mobile app support with reliable 4G connectivity.'
  }
    ,
  {
    name: 'STC A60 Magnetic GPS Tracker',
    price: 2999,
    imageUrl: 'assets/images/m60.png',
    trackingType: 'Live GPS Tracking',
    batteryLife: '7–10 Days',
    connectivity: '2G + Mobile App',
    warranty: '1 Year',
    description: 'Compact magnetic GPS tracker with strong magnet mount for easy installation on vehicles or assets. Provides real-time tracking, geo-fencing, and alert notifications via mobile app with reliable 4G connectivity.'
  },
   {
      name: 'Gtropy AIS 140 GPS Tracker',
    price: 4999,
    imageUrl: 'assets/images/getropy.png',
    trackingType: 'Live GPS Tracking + Vehicle Diagnostics',
    batteryLife: 'Vehicle Powered',
    connectivity: '4G + GPS + App + Web Portal',
    warranty: '1 Year',
    description: 'AIS 140 certified GPS tracking device designed for commercial vehicles with real-time tracking, emergency panic button integration, vehicle diagnostics, and seamless 4G connectivity supporting government compliance.'
  }
  // ,
  //  {
  //     name: 'Smart GPS Tracker',
  //   // price: 2699,
  //   imageUrl: 'assets/images/eLock.png',
  //   trackingType: 'Live GPS Tracking ',
  //   batteryLife: '3–5 Days',
  //   connectivity: 'GPS + 2G + 365GPS App',
  //   warranty: '1 Year',
  //   description: 'Reliable GPS tracker with live location tracking,, geo-fence alerts, and 3 months of location history. Ideal for kids’ safety, daily location monitoring, and outdoor activities like camping. Supports the 365GPS app for seamless control and notifications.'
  // }
  //  ,
  //  {
  //     name: 'STC Magnetic GPS Tracker',
  //   // price: 2599,
  //   imageUrl: 'assets/images/FatcaGps.png',
  //   trackingType: 'Live Location Tracking + Voice Monitor',
  //   batteryLife: '7–10 Days',
  //   connectivity: 'Cellular + Track App',
  //   warranty: '1 Year',
  //   description: 'Compact GPS tracker with strong magnetic base, live tracking, voice listen-in, geofencing, and route history playback. Designed for discreet placement with long battery life and full control via the  Track mobile application.'
  // }
   ,
   {
    name: 'STC E-LOCK GPS Tracker ',
    // price: 2699,
    imageUrl: 'assets/images/eLock.png',
    trackingType: 'Live GPS Tracking ',
    // batteryLife: '3–5 Days',
    Dimensions: '27.5 cm (height) × 11.5 cm (width) × 4.5 cm (depth)',
    connectivity: 'GPS + 2G + 365GPS App',
    warranty: '1 Year',
    description: 'A robust, intelligent lock-style GPS tracker with live location tracking, geo-fence alerts, and 2 months of location history. Designed for high-security applications and asset protection. Compatible with the 365GPS app for seamless real-time monitoring and alerts. Ideal for logistics, outdoor gear security, and remote tracking'
  }
  //  ,
  //  {
  //   name: 'Mini GPS Locator',
  //   price: 2499,
  //   imageUrl: 'assets/images/STC01.jpeg',
  //   trackingType: 'Live Tracking',
  //   batteryLife: '3 Days',
  //   connectivity: '2G + App',
  //   warranty: '6 Months'
  // }
   ,
   {
      name: 'Smart IoT Wheel Lock with GPS Tracking',
    // price: 4499,
    imageUrl: 'assets/images/STC02.jpeg',
    trackingType: 'Real-Time GPS Location + Lock Status Monitoring',
    batteryLife: 'Powered by Vehicle / Integrated Battery',
    connectivity: 'IoT Wheel Lock + Mobile App',
    warranty: '1 Year',
    description: 'Smart IoT-enabled wheel lock system integrated with real-time GPS tracking for enhanced vehicle security. Allows remote locking/unlocking, movement detection, and live location tracking via mobile app. Ideal for fleet operators, parking enforcement, and high-security transport needs.'
  }
  ,
  {
      name: 'STC-Series 4G AI 1+2DMS ADAS Dashcam',
    // price: 9999,
    imageUrl: 'assets/images/16.png',
    trackingType: 'Live Video + GPS Tracking',
    batteryLife: 'Vehicle Powered',
    connectivity: '4G + Wi-Fi + GPS + App + Web Portal',
    warranty: '1 Year',
    description: 'Advanced N6-Series AI dashcam with real-time 4G video streaming, GPS tracking, driver monitoring system (DMS), ADAS features, and cloud integration for enhanced vehicle safety and fleet management.'
  }
   ,
   {
     name: 'IoT BMS GPS Tracker',
  // price: 2499,
  imageUrl: 'assets/images/ps11.webp',
  trackingType: 'Cell Health Monitoring + GPS Tracking',
  batteryLife: 'Powered by Battery System (No Internal Battery)',
  connectivity: 'N/A',
  warranty: '1 Year',
  description: 'Advanced IoT-based Battery Management System (BMS) with integrated GPS tracking. Monitors cell health, cell temperature, state of charge (SOC), GPS location, and external battery voltage in real time. Ideal for electric vehicles, energy storage systems, and smart battery packs. Enables predictive maintenance and enhanced battery performance through remote diagnostics.'
  }
    ,
   {
     name: 'STC 98 GPS DashCam',
  // price: 5999,
  imageUrl: 'assets/images/STC05.jpeg',
  trackingType: 'Live GPS Tracking + HD Video Recording',
  batteryLife: 'Powered by Vehicle',
  connectivity: '4G + Mobile App',
  warranty: '1 Year',
  description: 'Advanced 4G GPS DashCam featuring real-time location tracking, high-definition video recording, cloud storage support, and app-based access. Ideal for commercial and personal vehicles to ensure safety, route monitoring, and incident recording.'
  }
    ,
   {
      name: 'Kids Smart GPS Watch',
    // price: 3499,
    imageUrl: 'assets/images/watch.png',
    trackingType: 'Live GPS Tracking',
    batteryLife: '2–3 Days',
    connectivity: '4G + Mobile App ',
    warranty: '1 Year',
    description: 'Feature-rich GPS smart watch for kids with touch screen, video calling, real-time tracking, SOS alert, camera, and two-way communication. Waterproof design and “Do Not Disturb” mode ensure safety, connection, and focus anytime, anywhere.'
  }
    ,
   {
      name: 'Pet GPS Tracker',
    // price: 2499,
    imageUrl: 'assets/images/patTracker.png',
    trackingType: 'Live GPS Tracking + Activity Monitoring',
    batteryLife: '2–4 Days',
    connectivity: '2G/4G (except Jio) + 365GPS App',
    warranty: '1 Year',
    description: 'Compact and lightweight GPS tracker for pets with real-time location tracking, activity monitoring, geo-fencing, location history, and alert notifications. Features a built-in microphone and supports 2G/4G SIM cards (Jio not supported) with 365GPS mobile app integration.'
  }
    ,
   {
      name: 'ID-CARD GPS  Tracker',
    // price: 2699,
    imageUrl: 'assets/images/ICARD.png',
    trackingType: 'Real-Time Location + Voice Monitoring + Calling',
    batteryLife: '2–4 Days',
    connectivity: 'Cellular (2G/4G) + 365GPS / Track App',
    warranty: '1 Year',
    description: 'Lightweight and compact GPS tracker with real-time tracking, panic alerts, mobile-style calling, and voice monitoring. Perfect for child safety, emergency response, asset tracking, and covert use. Compatible with 365GPS and  Track apps and supports 2G/4G SIM cards (Jio not supported).'
  }
    ,
   {
    name: 'OBD GPS Tracker',
  // price: 2499,
  imageUrl: 'assets/images/obd2.webp',
  trackingType: 'Real-Time GPS Tracking + Driving Behavior Monitoring',
  batteryLife: 'Powered by Vehicle (No Charging Required)',
  connectivity: 'Cellular (2G) + 365GPS / Track App',
  warranty: '1 Year',
  description: 'Plug-and-play OBD GPS tracker that provides real-time location tracking, trip history, vehicle diagnostics, and driving behavior alerts. Ideal for personal and fleet vehicles. Supports 2G/4G SIM cards (Jio not supported) and is compatible with 365GPS and Track apps.'
   }
    ,
   {
    name: 'Multi-function GPS',
  // price: 2499,
  imageUrl: 'assets/images/iot.webp',
  trackingType: 'Real-Time GPS Tracking + Load Calculation + Driving Behavior',
  batteryLife: 'Powered by Vehicle (No Charging Required)',
  connectivity: 'Cellular (4G) + 365GPS / Track App',
  warranty: '1 Year',
  description: 'Advanced 4G GPS tracker designed for commercial vehicles with real-time location tracking, load weight monitoring, and driver behavior analytics. Ideal for logistics and transport companies to ensure safety, prevent overloading, and optimize fleet operations. Compatible with 365GPS and Track apps. Supports 4G SIM cards.'
   }

     ,
   {
    name: 'Multi-function Body-Worn Camera (STC03-A / STC11-A / STC21)',
  // price: 7499,
  imageUrl: 'assets/images/52.jpg',
   imageUrls: [
      'assets/images/52.jpg',
      'assets/images/bodyworncarmera.png',
      'assets/images/bodywarncamera2.png',
      'assets/images/bodywarncamera3.png',
    ],
  trackingType: 'Video Recording + GPS Logging + Intercom Support',
  batteryLife: '4200mAh / Dual 2500mAh / 2850mAh (Model Dependent)',
  connectivity: '3G/4G + 2.4G WiFi (Model Dependent)',
  warranty: '1 Year',
  description: 'High-performance body-worn cameras ideal for law enforcement and field security. Supports full HD video recording, two-way audio intercom, GPS logging, and encrypted storage. Available models (STCJ03-A, STC11-A, STCJ21) feature up to 34MP photos, IR-CUT night vision, multiple recording buttons, and PTT cluster intercom. Storage options include internal memory and TF card support. Compatible with CMSV9/CMSV6 platforms (model dependent).'
   }
       ,
   {
      name: 'Intelligent Logistics Fleet Solution',
    // price: 12499,
    imageUrl: 'assets/images/publicTransport.png',
     imageUrls: [
      'assets/images/publicTransport.png',
      'assets/images/publicTransport2.png',
    ],
    trackingType: 'Real-Time GPS Tracking + Video Surveillance + Load Monitoring',
    batteryLife: 'Powered by Vehicle (No Charging Required)',
    connectivity: '4G Cellular + 365GPS / Track App + Wired Accessories',
    warranty: '1 Year',
    description: 'Comprehensive logistics fleet management solution integrating 4CH 4G HD dashcam, reverse & waterproof cameras, BSD siren, RFID driver identification, and OBD diagnostics. Enables real-time GPS tracking, load weight monitoring, video surveillance, and driving behavior analysis. Optimized for fleet safety, efficiency, and compliance. Compatible with 365GPS and Track apps. Includes relay control and live monitoring screen.'
   }
       ,
   {
     name: 'Smart Public Transit Surveillance & Safety Solution',
  // price: 17499,
  imageUrl:'assets/images/logicstics.png',
  imageUrls: [
      'assets/images/logicstics.png',
      'assets/images/logicstics2.png',
    ],
  trackingType: 'Real-Time GPS Tracking + Passenger Counting + Driver Monitoring',
  batteryLife: 'Powered by Vehicle (No Charging Required)',
  connectivity: '4G Cellular + Wired Sensors + 365GPS / Track App',
  warranty: '1 Year',
  description: 'All-in-one 4G-based safety and monitoring solution for public transport systems. Includes real-time GPS tracking, interior and rear cameras, ADAS & DMS driver safety systems, alcohol tester, BSD system, temperature sensor, passenger counting cameras, and bus stop announcer. Enables live video feed, behavior analytics, RFID-based driver authentication, and emergency alert management. Fully compatible with 365GPS / Track apps and supports 4G SIM cards for seamless connectivity.'
   }
      ,
   {
       name: 'Smart School Bus Surveillance & Safety System',
  // price: 17499,
  imageUrl: 'assets/images/schoolBus.png',
   imageUrls: [
      'assets/images/schoolBus.png',
      'assets/images/busfeacture.png',
    ],
  trackingType: 'Real-Time GPS Tracking + Full Vehicle Surveillance + Driver Behavior Monitoring',
  batteryLife: 'Powered by Vehicle (No Charging Required)',
  connectivity: '4G Cellular + Wired Sensors + 365GPS / Track App',
  warranty: '1 Year',
  description: 'Comprehensive 4G-based surveillance and safety system tailored for school buses. Integrates multiple safety and monitoring modules including: interior and exterior cameras (left, right, rear, front BSD), ADAS (Advanced Driver Assistance System), DMS (Driver Monitoring System), alcohol tester, reverse radar, motion sensor/millimeter wave radar, temperature sensor, student IC card reader, and emergency SOS button. Features also include inspection button, 8CH MDVR (HDD/SSD), UPS backup, live video streaming, intercom/speaker system, and 365GPS compatibility for real-time alerts and route tracking. Ensures student safety, improves driver accountability, and provides live monitoring access.'
   }

     ,
   {
      name: 'STC Solar GPS E-Lock',
  // price: 17499,
  imageUrl: 'assets/images/solarLocker.jpeg',
  trackingType: 'Real-Time GPS Tracking + Solar Lock Monitoring',
  batteryLife: 'Solar Powered + Rechargeable Backup Battery',
  connectivity: '4G Cellular + GPS + 365GPS / Track App',
  warranty: '1 Year',
  description: 'Rugged and intelligent GPS Solar Lock designed by STC for secure tracking and remote monitoring of containers, gates, and movable assets. Equipped with real-time GPS tracking, tamper alerts, and remote locking/unlocking capabilities. Solar-powered for extended field deployment with built-in rechargeable battery for backup. Supports 4G communication and integrates with 365GPS / Track App for instant alerts, live location updates, route history, and security breach notifications. Ideal for logistics, transportation, and high-value asset protection.'
   }
  
     ,
   {
       name: 'PCB Manufacturing Job Work',
       imageUrl: 'assets/images/pcb.jpg',
  // price: 17499,
  imageUrls: [
      'assets/images/pcb.jpg',
      'assets/images/pcb2.jpeg',
      'assets/images/pcb3.jpeg'
    ],
  trackingType: 'N/A',
  batteryLife: 'N/A',
  connectivity: 'N/A',
  warranty: 'As per project agreement',
  description: 'Professional PCB (Printed Circuit Board) manufacturing job work services offering precision fabrication, assembly, and testing. Suitable for single-layer, double-layer, and multi-layer PCBs with support for prototypes to full-scale production. Services include component sourcing, SMT/DIP assembly, functional testing, and quality assurance. Ideal for industrial, automotive, IoT, and consumer electronics applications.'
   }

     ,
   {
        name: 'STC Smart APC, ADAS, DMS & BSD Solution',
    imageUrl: 'assets/images/APC.png',
    // price: 17499,
    imageUrls: [
      'assets/images/APC.png',
      'assets/images/APCinner2.png',
      'assets/images/APCinner3.png'
    ],
    trackingType: 'Real-Time Passenger Counting + Driver Behavior Monitoring + Safety Alerts',
    batteryLife: 'Powered by Vehicle',
    connectivity: '4G Cellular + MDVR + CMS Integration',
    warranty: '1 Year',
    description: 'Advanced AI-based fleet safety and monitoring system by STC, integrating Automatic Passenger Counting (APC), Advanced Driving Assistance System (ADAS), Driver Monitoring System (DMS), Blind Spot Detection (BSD), and Face Recognition (FR). Offers accurate passenger statistics with 95%+ accuracy, forward collision and lane departure warnings, driver fatigue/distraction detection, and blind spot alerts for enhanced road safety. The system supports real-time data streaming to CMS, MDVR display, and generates statistical reports for actionable insights. Designed for public transit, school buses, and commercial fleets to ensure safety, compliance, and efficiency.'
   }
  
];



 selectedProduct: any = null;
 mainImage: string = '';

  viewDetails(product: any) {
  this.selectedProduct = product;

  if (product.imageUrls && product.imageUrls.length > 0) {
    this.mainImage = product.imageUrls[0];
  } else {
    this.mainImage = product.imageUrl;
  }
}

closeModal() {
  this.selectedProduct = null;
  this.mainImage = '';
}
  BuyNow(){
     this.selectedProduct = null;
  }





}
