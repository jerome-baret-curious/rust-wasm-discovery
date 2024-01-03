mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    White = 0,
    Black = 1,
}

#[wasm_bindgen]
pub struct QRCode {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

fn main() {
    use std::fmt;

    impl fmt::Display for QRCode {
        fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
            for line in self.cells.as_slice().chunks(self.width as usize) {
                for &cell in line {
                    let symbol = if cell == Cell::White { '◻' } else { '◼' };
                    write!(f, "{}", symbol)?;
                }
                write!(f, "\n")?;
            }

            Ok(())
        }
    }

    /// Public methods, exported to JavaScript.
    #[wasm_bindgen]
    impl QRCode {
        pub fn new() -> QRCode {
            let width = 64;
            let height = 64;

            let cells = (0..width * height).map(|i| Cell::White).collect();

            QRCode {
                width,
                height,
                cells,
            }
        }

        pub fn render(&self) -> String {
            self.to_string()
        }

        fn get_index(&self, row: u32, column: u32) -> usize {
            (row * self.width + column) as usize
        }
    }
}
