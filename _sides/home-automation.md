---
date: 2023-11-15
published: true
title: "Smart Home Automation"
description: "IoT system using ESP32 and MQTT for home monitoring and control"
categories: hardware, iot, web
disciplines: "Embedded Systems, Web Development"
time_period: "2023"
thumbnail: "/images/projects/esp32/esp32-v2.png"

project_type: "Hardware + Software"
technologies: ["ESP32", "MQTT", "Node.js", "React", "3D Printing"]
duration: "1 month"
status: "Active"
github_url: "https://github.com/clementpeleman/home-automation"

intro: |
  A comprehensive smart home automation system built with ESP32 microcontrollers, featuring real-time sensor monitoring, device control, and a responsive web dashboard for managing the entire system.

content_layout:
  - section_layout: text
    content: |
      ## System Architecture
      
      The system consists of multiple ESP32 nodes distributed throughout the home, each responsible for specific sensors and actuators. All devices communicate via MQTT protocol to a central Node.js server that manages state and provides a REST API.
      
      ### Key Features
      - Temperature and humidity monitoring
      - Smart lighting control
      - Security system integration  
      - Energy consumption tracking
      - Mobile-responsive web interface
      - Real-time notifications
      
  - section_layout: 1col-narrow
    images:
      - caption: |
          ESP32 development board with custom sensor shield
        description: Custom PCB design for sensor integration
        url: '/projects/esp32/esp32-v2.2.png'
        
  - section_layout: text
    content: |
      ## Technical Implementation
      
      Each ESP32 node runs custom firmware written in C++ using the Arduino framework. The nodes connect to the home WiFi network and publish sensor data while subscribing to control commands via MQTT.
      
      The web dashboard is built with React and provides real-time updates using WebSocket connections to the Node.js backend.
---

This project demonstrates full-stack IoT development, from hardware design and embedded programming to web application development and system integration.