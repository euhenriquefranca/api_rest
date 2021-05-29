import multer from "multer";
import multerConfig from "../config/multerConfig";

import Photo from "../models/Photo";

const upload = multer(multerConfig).single("foto");

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const {aluno_id} = req.body
      const foto = await Photo.create({ originalname, filename ,aluno_id});
      return res.json(foto);
    });
  }
}

export default new PhotoController();
