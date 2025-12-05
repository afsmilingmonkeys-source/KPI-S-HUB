{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // KPI-S-HUB - Script principal\
console.log('KPI-S-HUB cargado correctamente');\
\
// Funci\'f3n b\'e1sica para evitar error si usas jQuery o algo similar\
document.addEventListener('DOMContentLoaded', function() \{\
    console.log('DOM completamente cargado');\
    \
    // Si hay errores con elementos que no existen, agr\'e9gales manejo\
    try \{\
        // Tu c\'f3digo JavaScript aqu\'ed\
    \} catch (error) \{\
        console.warn('Error en ejecuci\'f3n:', error);\
    \}\
\});}