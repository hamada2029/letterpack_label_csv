/*jshint esversion: 6 */


function emptyDoc(){
    const dd = {
        pageSize: 'A4',
        content: [],
        defaultStyle: {font: 'mplus_2m'}
    };
    return dd; 
}


function makeContentArray(ao, images){
    const pos = new Pos(ao).mplus_2m;
    const content = [{
        image: images[ao.plus_or_light],
        absolutePosition: {x:0, y:0},
        width: 594.35
    }];
    for (let nm in pos) {
        const t_o = {
            text: ao[nm],
            absolutePosition: pos[nm].position,
            fontSize: pos[nm].size
        };
        if('space' in pos[nm]){
            t_o.characterSpacing = pos[nm].space;
        }
        content.push(t_o);
    }
    return content;
}


// pageBreak: 'before'
function _defineMultiDoc(aos, images) {
    var dd = emptyDoc();
    for (var i = 0; i < aos.length; i++) {
        var c = makeContentArray(aos[i], images);
        if (dd.content.length > 0) {
            c[0].pageBreak = 'before';
        }
        dd.content = dd.content.concat(c);
    }
    return dd;
}

