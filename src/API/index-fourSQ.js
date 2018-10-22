class FourSquare {
  static getURL(endpoint) {
    return fetch(
      'https://api.foursquare.com/v2/venues/' +
        endpoint +
        '?near=Irvine,CA&query=chinese&limit=5&client_id=T0SRNGVDIIWOI2SDWLQAPRNFKDZJJUXEG100I0A1ZK4QHDVP&client_secret=MVFMYTMUVWHISANRBL4NWUNBRONHXQDDYDGWHYMUWYZVMJNY&v=20181020'
    ).then(resp => resp.json());
  }
}

export default FourSquare;
