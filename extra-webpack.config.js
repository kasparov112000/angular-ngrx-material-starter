1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
// ============================================================================
//    Author: Kenneth Perkins
//    Date:   Dec 14, 2021
//    Taken From: http://programmingnotes.org/
//    File:  extra-webpack.config.js
//    Description: Configures an Asset Module file loader for images
// ============================================================================
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  }
};
