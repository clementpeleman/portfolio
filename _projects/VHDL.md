---
date: 2024-03-08
published: true
title: "FPGA PWM controller in VHDL"
description: "A servocontroller written in VHDL on the Basys3 board"
categories: Programming
disciplines: Programming
media:
ownership: Personal
client:
time_period: 2024
thumbnail: "/projects/VHDL/servocontroller_thumbnail.jpeg"

intro: |
  This project showcases the design and implementation of a Pulse-Width Modulation (PWM) controller using VHDL for an FPGA (Field-Programmable Gate Array). The goal is to generate precise PWM signals that can be used to control various devices such as motors, LEDs, or power supplies.

content_layout:
  - section_layout: 2col
    images:
      - caption:
        description: Schematic
        url: '/projects/VHDL/schematic.png'
        width:
        height:

      - caption:
        description: Vivado
        url: '/projects/VHDL/vivado.jpg'
        width:
        height:

  - section_layout: 1col
    images:
      - caption: |
          Result of the testbench simulation; data is the required angle of the servo and PWM_out is the corresponding PWM signal.
        description: Icon set specimen
        url: '/projects/VHDL/simulation-transformed.png'
        width:
        height:

---
