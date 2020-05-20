import crypto from 'crypto';
import path from 'path';
import multer from 'multer';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp'),
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(5).toString('HEX');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};
