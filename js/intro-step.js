var options_before = {
        steps: [
            {
                element: '#step1',
                title: 'Tombol Navigation',
                intro: 'Klik untuk melihat konten navigasi'
            },
            {
                element: '#step2',
                title: 'Tombol header',
                intro: 'Tombol diantaranya: Profile, Dark mode, Bookmark, Translate, dan Search'
            },
            {
                element: '#step3',
                title: 'Tombol bawah',
                intro: 'Tombol diantaranya: Comments, Share, Dark, Menu, Search, dan Home'
            },
            {
                element: '#step4',
                title: 'Informasi penulis',
                intro: 'Saya hanya kang copy paste'
            },
            {
                element: '#step5',
                title: 'Kotak donasi',
                intro: 'Yang sultan silahkan donasi'
            },
            {
                element: '#step6',
                title: 'Rating',
                intro: 'Yang bocil beri bintang'
            },
            {
                element: '#step7',
                title: 'Like',
                intro: 'Yang om beri like'
            },
            {
                element: '#step8',
                title: 'Komentar',
                intro: 'Yang baik beri komentar'
            },
            {
                element: '#step9',
                title: 'Recent post',
                intro: 'Silahkan pilih yang kalian cari'
            },
            {
                element: '#step10',
                title: 'Recent post',
                intro: 'Silahkan pilih yang kalian cari'
            }
        ]
    };

    function startObjectsIntro() {
        var intro = introJs();
        intro.setOptions(options_before);
        intro.start().onbeforechange(function () {

            if (intro._currentStep == "10") {
                alert("Step Akhir")
            } 
        });
    }
