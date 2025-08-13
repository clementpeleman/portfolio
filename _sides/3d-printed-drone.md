---
title: FPV Drone Pilot
description: In my free time, I like to fly FPV. FPV stands for
  First-Person-View. It means that you fly based on what a little camera in the
  drone sees. This video feed is sent in realtime to goggles that you wear on
  your face. I built this drone myself and designed a simple GoPro mount, which
  I 3D-printed.
date: 2025-08-13T16:57:00.000+02:00
published: true
categories: hardware, 3d-printing, drone
disciplines: Mechanical Design, 3D Design
time_period: "2023"
thumbnail: /images/sides/img_5237.jpeg
project_type: ""
technologies:
  - 3D Printing
  - Betaflight
  - IMU Sensors
  - PID Control
  - DJI
duration: ""
status: Completed
intro: In my free time, I like to fly FPV. FPV stands for First-Person-View. It
  means that you fly based on what a little camera in the drone sees. This video
  feed is sent in realtime to goggles that you wear on your face. I built this
  drone myself and designed a simple GoPro mount, which I 3D-printed.
content_layout:
  - section_layout: 1col-narrow
    images:
      - caption: |
          Assembled drone with custom 3D printed frame
        description: Final assembled quadcopter
        url: /projects/h16/main.png
  - section_layout: text
    content: >
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
        url: /projects/h16/first.png
  - section_layout: text
    content: >
      ## Flight Controller


      Custom flight controller based on Arduino Nano with MPU6050 IMU for attitude sensing. Implemented PID control algorithms for stable hovering and responsive manual control.


      The firmware includes:

      - Sensor fusion for attitude estimation

      - Multi-loop PID controllers for each axis  

      - Failsafe mechanisms for signal loss

      - Telemetry data transmission
---
In my free time, I like to fly FPV. FPV stands for First-Person-View. It means that you fly based on what a little camera in the drone sees. This video feed is sent in realtime to goggles that you wear on your face. I built this drone myself and designed a simple GoPro mount, which I 3D-printed.
