class FourSquare {
  static getURL(endpoint) {
    return fetch(
      'https://api.foursquare.com/v2/venues/' +
        endpoint +
        '?near=Irvine,CA&query=tacos&limit=5&client_id=Y2F0DPVEWZLIVSMKZP0MHHEURMRQV3Z3I115ANTEQFXKGZOV&client_secret=HIBDR4CWFZNUTTRIR0HESSZUCWLGDQ3LSOY1OGPIVBD0D52P&v=20181022'
    ).then(resp => resp.json());
  }
}

export default FourSquare;
