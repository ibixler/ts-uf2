
import fs from 'fs';
import { decodeBlock, familyMap } from 'uf2';

const file = fs.openSync('src/keebio_cepstrum_rev1_via.uf2', 'r');
const buffer = new Uint8Array(512);
while (fs.readSync(file, buffer) === buffer.length) {
  const block = decodeBlock(buffer);
  const family = familyMap.get(block.boardFamily) || 'unknown';
  const { totalBlocks, blockNumber, flashAddress, payload } = block;
  const hexAddress = '0x' + flashAddress.toString(16);
  console.log(`Block ${blockNumber + 1}/${totalBlocks} @${hexAddress}, Family: ${family}`);
  /* var string = new TextDecoder().decode(payload);
  console.log(string);
  const hex = Buffer.from(payload).toString('hex'); */
  

  // Do something with payload...
}
fs.closeSync(file);