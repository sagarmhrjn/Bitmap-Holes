# Bitmap Holes


Have the funtion **BitmapHoles(strArr)** take the array of strings stored in **strArr**,
which will be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected
group of 0's going in one or more of four directions:

up, down, left or right

For example: if **strArr** is ["10111", "10101", "11101", "11111"], then this looks
like the following matrix:


1  **0**  1  1  1
1  **0**  1  **0**  1
1  1  1  **0**  1
1  1  1  1  1
<br>


For the input above, your program should return **2** because there are two separate
contiguous regions of 0's, which create "holes in the matrix. You can assume the input will not be empty.


# Documentation


This program is documented by using [JsDoc](https://jsdoc.app/).

# Usage

1. Clone the repo
   ```sh
    git@github.com:sagarmhrjn/Bitmap-Holes.git
   ```
2. Install NPM packages 
   ```sh
   npm install
   ```
3. Test the program
   ```sh
   npm run start
   ```
2. To generate a document for the application 
   ```sh
   npm run doc
   ```