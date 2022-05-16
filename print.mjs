import * as pdf from 'html-pdf';
import {readFileSync} from 'fs';
import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sourcePath = resolve(__dirname, './resumes/resume.html');
const resume = readFileSync(sourcePath);

pdf.create(resume.toString()).toFile(resolve(__dirname, './resumes/resume.pdf'), (err) => {
    if (err) {
        console.log(err);
    }
})