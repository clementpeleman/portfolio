---
date: 2023-08-20
published: true
title: "Custom 3D Printed Drone"
description: "Fully custom quadcopter with 3D printed frame and flight controller"
categories: hardware, 3d-printing, embedded
disciplines: "Mechanical Design, Embedded Systems"
time_period: "2023"
thumbnail: "/projects/h16/thumbnail.png"

project_type: "Hardware Design"
technologies: ["3D Printing", "Arduino", "IMU Sensors", "PID Control"]
duration: "6 weeks"
status: "Completed"

intro: |
  A completely custom quadcopter featuring a 3D printed carbon fiber reinforced frame, custom flight controller based on Arduino, and advanced stabilization algorithms for autonomous flight.

content_layout:
  - section_layout: 1col-narrow
    images:
      - caption: |
          Assembled drone with custom 3D printed frame
        description: Final assembled quadcopter
        url: '/projects/h16/main.png'
        
  - section_layout: text
    content: |
      ## Design Process
      
      The frame was designed in Fusion 360 with emphasis on weight reduction while maintaining structural integrity. Multiple prototypes were printed and tested to optimize the design for crash resistance and vibration dampening.
      
      ### Specifications
      - Frame: Carbon fiber reinforced PLA
      - Flight time: ~15 minutes
      - Payload capacity: 200g
      - Control range: 500m
      - Weight: 450g
      
  - section_layout: 1col-narrow
    images:
      - caption: |
          CAD model showing internal component layout
        description: 3D model of frame design
        url: '/projects/h16/first.png'

  - section_layout: text
    content: |
      ## Flight Controller
      
      Custom flight controller based on Arduino Nano with MPU6050 IMU for attitude sensing. Implemented PID control algorithms for stable hovering and responsive manual control.
      
      The firmware includes:
      - Sensor fusion for attitude estimation
      - Multi-loop PID controllers for each axis  
      - Failsafe mechanisms for signal loss
      - Telemetry data transmission
---

This project combined mechanical design, embedded programming, and control theory to create a fully functional autonomous flying vehicle.