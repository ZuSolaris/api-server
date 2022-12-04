'use strict';

const e = require("cors");

class ModelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let record = await this.model.create(json);
      return record;
    } catch (e) {
      console.error('there is a model interface error', e);

      return e;
    }
  }


  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: { id } });
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (e) {
      console.error('there is a ModelInterface read error', e);
      return e;
    }
  }
  async readManyToOne(id, model) {
    try {
      let record = await this.model.findOne({
        where: { id },
        include: model,

      });
      return record;
    } catch (e) {
      console.error('we have a modelInterface, and readManyToOne error', e);
      return e;

    }
  }

  async update(json, id) {
    try {
      await this.model.update(json, { where: { id } });
      let record = await this.model.findOne({ where: { id } });
      return record;
    } catch (e) {
      console.error('we have a ModelInterface update error', e);
      return e;
    }

  }
}

module.exports = ModelInterface;