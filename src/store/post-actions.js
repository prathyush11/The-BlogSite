import { postActions } from "./post";
import { postsActions } from "./posts";
export const sendPostData = ( postData, postId ) => {

    return async ( dispatch ) => {

        console.log( "sending" );
        console.log( "send data action is triggered" );
        const sendRequest = async () => {

            const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${ postId }.json`;
            const response = await fetch( url,
            {

                method: "PUT",
                body: JSON.stringify( postData )

            } );

            if ( ! response.ok )
            {

                throw new Error( "Sending data failed." );

            }

        };

        try
        {

            await sendRequest();
            console.log( "Success" );

        } catch ( error )
        {

            console.log( error );
            console.log( "send post error" );

        }

    };

};

export const fetchPostData = ( postId ) => {

    return async ( dispatch ) => {
        postId = "1525768a-3c49-4169-8b69-98bbdaf6a287";
        console.log( "fetch data action is triggered" );
        const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${ postId }.json`;
        const fetchData = async () => {

            const response = await fetch( url );

            if ( ! response.ok )
            {

                throw new Error( "Could not fetch data!" );

            }
            console.log(response);
            const data = await response.json();

            return data;

        };

        try
        {

            const postData = await fetchData();
            var data = {

                ... postData,
                comments : postData.comments === undefined ? [] : postData.comments,
                postData : postData.postData === undefined ? [] : postData.postData

            }
            dispatch( postActions.add( data ) );
            return data;

        } catch ( error )
        {

            console.log( "error" );
            return "failed"

        }

    };

};

export const fetchPostsData = ( postId ) => {

    return async ( dispatch ) => {
        
        console.log( "fetch data action is triggered" );
        const url = `https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${ postId }.json`;
        const fetchData = async () => {

            const response = await fetch( url );

            if ( ! response.ok )
            {

                throw new Error( "Could not fetch data!" );

            }
            // console.log(response);
            const data = await response.json();

            return data;

        };

        try
        {

            const postData = await fetchData();
            var data = {

                ... postData,
                comments : postData.comments === undefined ? [] : postData.comments,
                postData : postData.postData === undefined ? [] : postData.postData

            }
            dispatch( postsActions.addPost( data ) );
            return "success";

        } catch ( error )
        {

            console.log( "error" );
            return "failed"

        }

    };

};
