export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        },
        {
            name:'profileUrl',
            title:'Profile URL',
            type:'url',
            description: 'LinkedIn, personal website, or other profile URL'
        },
        {
            name:'proofUrl',
            title:'Proof URL',
            type:'url',
            description: 'URL to the proof or testimonial source. Users will be redirected here when clicking on the testimonial card'
        }
    ]
}
