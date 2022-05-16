import * as cheerio from 'cheerio';
import {readFileSync, writeFileSync} from 'fs';
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sourcePath = resolve(__dirname, '../resumes/resume.html');
const resume = readFileSync(sourcePath);
const rodo = readFileSync(resolve(__dirname, './rodo.html'));
const styles = readFileSync(resolve(__dirname, './styles.css'));

const $ = cheerio.load(resume);

$('section.content').last().after(rodo.toString());
$('style').append(styles.toString());


writeFileSync(sourcePath, $.html());