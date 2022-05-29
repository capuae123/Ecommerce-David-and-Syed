export default{
    name:'product',
    title:'Product',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true,    /*https://www.sanity.io/docs/image-type then ctrl+f for hotspot*/ 
            }
        },
        {
            name: 'name',
            title:'Name',
            type:'string'
        },
        {
            name:'slug',        /*it is like a url/unique string */
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxlength:90,
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'details',
            title:'Details',
            type:'string',
        },
    ]
}