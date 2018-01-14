'use strict'

const Building = require('../models/building')

let BuildingController = {
  'post': {
    'createBuilding': async (req, res, next) => {
      const building = req.body
      let findBuilding
      let result
      try {
        findBuilding = await Building.findBuilding({'name': building.name})
      } catch (error) {
        console.error(error)
        return res.status(500).json({
          'code': 101,
          'message': '服务器内部错误',
          'result': {}
        })
      }

      console.log(findBuilding)

      if (findBuilding !== null) {
        return res.status(500).json({
          'code': 101,
          'message': '找到相同的',
          'result': {}
        })
      } else {
        try {
          result = Building.createBuilding({
            'name': building.name.toLowerCase(),
            'latitude': building.latitude,
            'longitude': building.longitude
          })
        } catch (error) {
          console.error(error)
          return res.status(500).json({
            'code': 101,
            'message': '服务器内部错误',
            'result': {}
          })
        }
      }
      return res.status(200).json({
        'code': 200,
        'message': 'successful',
        'result': result
      })
    }
  },
  'get': {}
}

module.exports = BuildingController
