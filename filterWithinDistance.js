// import {buffer, point, featureCollection, pointsWithinPolygon} from "@turf";
import * as turf from '@turf/turf'
function filterWithinDistance(data, lat, lng, distance) {
  //49.868400, -97.173556
  var pointVal = turf.point([lng, lat]);
  var buffered = turf.buffer(pointVal, distance, { units: "miles" });

  let dataPoints = [];
  data.map((item) => {
    dataPoints.push(turf.point([item.lat, item.lng], item));
  });

  var collection = turf.featureCollection(dataPoints);

  // turf within
  let resp = turf.pointsWithinPolygon(collection, buffered);
  return resp;
}

export default filterWithinDistance;
