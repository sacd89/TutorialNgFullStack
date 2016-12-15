import mongoose from 'mongoose';
import Promise from 'bluebird';
import cursoSchema from '../model/curso-model';
import _ from 'lodash';

cursoSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    curso
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

cursoSchema.statics.createNew = (curso) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(curso)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new curso(curso);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

cursoSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    curso
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const curso = mongoose.model('Curso', cursoSchema);

export default curso;
