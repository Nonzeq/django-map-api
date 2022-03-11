
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(50.4547, 30.5238), //Київ

        styles: [{ "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#202c3e" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }, { "weight": "1.39" }, { "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.96" }, { "saturation": "9" }, { "visibility": "on" }, { "color": "#000000" }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": 30 }, { "saturation": "9" }, { "color": "#29446b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "saturation": 20 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": 20 }, { "saturation": -20 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 10 }, { "saturation": -30 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#193a55" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "saturation": 25 }, { "lightness": 25 }, { "weight": "0.01" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "lightness": -20 }] }]
    };

    var mapElement = document.getElementById('map');


    var map = new google.maps.Map(mapElement, mapOptions);


    const postsList = document.querySelector('.post_list');
    const getPostsBtn = document.querySelector('.post__get-posts');


    async function getMapDot() {
        await getPostsRequest();


        var bounds = new google.maps.LatLngBounds();


        for (i in state.posts) {

            var position = new google.maps.LatLng(state.posts[i].xcoord, state.posts[i].ycoord);

            bounds.extend(position);

            let marker = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                icon: "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png",
                map: map,
                position: position,
                title: state.posts[i].title,
                info: state.posts[i].info


            });
            let infoWindow = new google.maps.InfoWindow({
                content: state.posts[i].info
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);

            });

        }

    }
    getMapDot();

    const postsTitle = document.querySelector('.form-title');
    const postsInfo = document.querySelector('.form-info');
    const postsXcoord = document.querySelector('.form-xcoord');
    const postsYcoord = document.querySelector('.form-ycoord');
    const addNew = document.querySelector('.add_post')


    const state = {
        posts: [],
        newPosts: {
            title: '',
            info: '',
            xcoord: '',
            ycoord: '',
        }
    }

    postsTitle.addEventListener('change', (e) => state.newPosts.title = e.target.value);
    postsInfo.addEventListener('change', (e) => state.newPosts.info = e.target.value);
    postsXcoord.addEventListener('change', (e) => state.newPosts.xcoord = e.target.value);
    postsYcoord.addEventListener('change', (e) => state.newPosts.ycoord = e.target.value);

    addNew.addEventListener('click', async () => {
        await createPostsRequest();
    })

    async function getPostsRequest() {
        return await fetch('https://django-map-api.herokuapp.com/api/v1/dotList', {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => res.json())
            .then((posts) => state.posts = state.posts.concat(posts))

    }
    async function createPostsRequest() {
        return await fetch('https://django-map-api.herokuapp.com/api/v1/dotList', {
            method: 'POST',
            body: JSON.stringify(state.newPosts),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => res.json())
            .then((post) => state.posts.push(post))

    }

}

