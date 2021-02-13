import axios from 'axios';
 
class HiveService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/api',
      withCredentials: true
    });
    this.hiveService = service;
  }


  getHivesForOwner = (owner) => {
    return this.hiveService.get(`/hives/${owner}`)
    .then(response => response.data)
  }

  getHive = (hiveId) => {
    return this.hiveService.get(`/hive/${hiveId}`)
    .then(response => response.data)
  }
}

export default HiveService;