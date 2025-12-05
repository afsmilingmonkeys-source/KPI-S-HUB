{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red123\green143\blue171;\red21\green21\blue21;\red247\green249\blue250;
\red226\green158\blue107;\red129\green201\blue99;\red220\green229\blue239;\red184\green130\blue220;\red91\green169\blue224;
}
{\*\expandedcolortbl;;\cssrgb\c55294\c63137\c72549;\cssrgb\c10588\c10588\c10980;\cssrgb\c97647\c98039\c98431;
\cssrgb\c91373\c68235\c49412;\cssrgb\c56863\c81569\c46275;\cssrgb\c89020\c91765\c94902;\cssrgb\c77647\c60000\c89020;\cssrgb\c42353\c72157\c90196;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
// app.js - Contenido b\'e1sico de React\cf4 \
\pard\pardeftab720\partightenfactor0
\cf5 import\cf4  React \cf5 from\cf4  \cf6 'react'\cf7 ;\cf4 \
\cf5 import\cf4  ReactDOM \cf5 from\cf4  \cf6 'react-dom/client'\cf7 ;\cf4 \
\cf5 import\cf4  \cf7 \{\cf4  Activity\cf7 ,\cf4  Users\cf7 ,\cf4  TrendingUp\cf7 ,\cf4  DollarSign \cf7 \}\cf4  \cf5 from\cf4  \cf6 'lucide-react'\cf7 ;\cf4 \
\
\cf5 const\cf4  \cf8 App\cf4  \cf5 =\cf4  \cf7 ()\cf4  \cf5 =>\cf4  \cf7 \{\cf4 \
  \cf5 return\cf4  React\cf7 .\cf8 createElement\cf7 (\cf6 'div'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'container mt-4'\cf4  \cf7 \},\cf4 \
    React\cf7 .\cf8 createElement\cf7 (\cf6 'h1'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'mb-4'\cf4  \cf7 \},\cf4  \cf6 'Dentalgy OS | KPI Portal'\cf7 ),\cf4 \
    React\cf7 .\cf8 createElement\cf7 (\cf6 'div'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'row'\cf4  \cf7 \},\cf4 \
      \cf2 // Aqu\'ed tu contenido React\cf4 \
      React\cf7 .\cf8 createElement\cf7 (\cf6 'div'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'col-md-3 mb-3'\cf4  \cf7 \},\cf4 \
        React\cf7 .\cf8 createElement\cf7 (\cf6 'div'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'card'\cf4  \cf7 \},\cf4 \
          React\cf7 .\cf8 createElement\cf7 (\cf6 'div'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'card-body'\cf4  \cf7 \},\cf4 \
            React\cf7 .\cf8 createElement\cf7 (\cf4 Activity\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'mb-2'\cf4  \cf7 \}),\cf4 \
            React\cf7 .\cf8 createElement\cf7 (\cf6 'h5'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'card-title'\cf4  \cf7 \},\cf4  \cf6 'KPIs Activos'\cf7 ),\cf4 \
            React\cf7 .\cf8 createElement\cf7 (\cf6 'p'\cf7 ,\cf4  \cf7 \{\cf4  \cf9 className\cf5 :\cf4  \cf6 'card-text'\cf4  \cf7 \},\cf4  \cf6 '12'\cf7 )\cf4 \
          \cf7 )\cf4 \
        \cf7 )\cf4 \
      \cf7 )\cf4 \
    \cf7 )\cf4 \
  \cf7 );\cf4 \
\cf7 \};\cf4 \
\
\cf5 const\cf4  root \cf5 =\cf4  ReactDOM\cf7 .\cf8 createRoot\cf7 (\cf4 document\cf7 .\cf8 getElementById\cf7 (\cf6 'root'\cf7 ));\cf4 \
root\cf7 .\cf8 render\cf7 (\cf4 React\cf7 .\cf8 createElement\cf7 (\cf4 App\cf7 ));}