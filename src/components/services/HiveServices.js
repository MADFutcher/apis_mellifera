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

  newHive = (hiveInfo) =>{
    return this.hiveService.post('/hives/new',hiveInfo)
               .then(response => response.data)
  }

  updateHive = (hiveInfo) => {
    return this.hiveService.post(`hive/${hiveInfo._id}`,hiveInfo)
                    .then(response => response.data)
  }
}

export default HiveService;