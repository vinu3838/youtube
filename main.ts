class youtubeVideo {
    protected video: any;
    protected videoNmae: string;
    protected videoLength: number;
    protected numberOfViwes: number;
    protected numberOfLikes: number;
    protected numberOfComments: number;
    protected Comments: string[];
    protected urlLink: string;
    //ChannlName:string;

    constructor(video: any, videoNmae: string, videoLength: number,
        numberOfViwes: number, numberOfLikes: number,
        numberOfComments: number, Comments: string[], urlLink: string) {
        this.video = video;
        this.videoNmae = videoNmae;
        this.videoLength = videoLength;
        this.numberOfViwes = numberOfViwes;
        this.numberOfLikes = numberOfLikes;
        this.numberOfComments = numberOfComments;
        this.Comments = Comments;
        this.urlLink = urlLink;
        //this.ChannlName=ChannlName;
    }
    //This function is when like button is clicked
    public addLike = () => {
        this.numberOfLikes = this.numberOfLikes + 1;

    }

    public addComment = (comment: string) => {
        this.Comments.push(comment);

    }

}



class KidsVideo extends youtubeVideo {

    // private AgeLimitRestriction:Boolean;
    // private Genre:string;
    constructor(video: any, videoNmae: string, videoLength: number,
        numberOfViwes: number, numberOfLikes: number,
        numberOfComments: number, Comments: string[], urlLink: string, private Genre: string, private AgeLimitRestriction?: Boolean) {
        super(video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink);
        this.video = video;
        this.videoNmae = videoNmae;
        this.videoLength = videoLength;
        this.numberOfViwes = numberOfViwes;
        this.numberOfLikes = numberOfLikes;
        this.numberOfComments = numberOfComments;
        this.Comments = Comments;
        this.urlLink = urlLink;
        this.AgeLimitRestriction = AgeLimitRestriction;
        this.Genre = Genre;

    }
}

class NormalVideo extends youtubeVideo {

    private signInRequired: Boolean;
    private Genre: string;
    constructor(video: any, videoNmae: string, videoLength: number,
        numberOfViwes: number, numberOfLikes: number,
        numberOfComments: number, Comments: string[], urlLink: string, signInRequired: Boolean, Genre: string) {
        super(video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink);
        this.video = video;
        this.videoNmae = videoNmae;
        this.videoLength = videoLength;
        this.numberOfViwes = numberOfViwes;
        this.numberOfLikes = numberOfLikes;
        this.numberOfComments = numberOfComments;
        this.Comments = Comments;
        this.urlLink = urlLink;
        this.signInRequired = signInRequired;
        this.Genre = Genre;

    }
}

class YoutubeChannel {
    private ChannelName: string;
    private VidoesInChannel: any[];
    private numberOfSubcribers: number;

    constructor(ChannelName: string, numberOfSubcribers: number) {
        this.ChannelName = ChannelName;
        this.VidoesInChannel = [];
        this.numberOfSubcribers = numberOfSubcribers;
    }

    AddVideo = (newVideo: NormalVideo | KidsVideo) => {

        this.VidoesInChannel.push(newVideo);
    }

    ChangeChannelName = (NewName: string) => {

        this.ChannelName = NewName;
    }

    viewVideoOfChannel = () => {

        return this.VidoesInChannel;

    }

    viewChannelName = () => {

        return this.ChannelName;

    }
    //When new Subscriber Comes
    Subscriber = () => {
        this.numberOfSubcribers = this.numberOfSubcribers + 1;

    }

}

let video1 = new KidsVideo("Abc", "Abc", 124, 22, 22, 3, ["Nice", "good"], "abc.com", "Comedy");
let video2 = new NormalVideo("Abcd", "Abcd", 124, 22, 22, 3, ["Nice", "good"], "abcd.com", true, "Comedy");
let video3 = new NormalVideo("Abcde", "Abcde", 125, 22, 22, 3, ["Nice", "good"], "abcd.com", true, "Comedy");
video3.addLike();
let Hello = new YoutubeChannel("Hello", 90);
console.log("The channel Name Earlier was " + Hello.viewChannelName());
Hello.ChangeChannelName("Hello World");
console.log("The channel Name after change is " + Hello.viewChannelName());
Hello.AddVideo(video1);
Hello.AddVideo(video2);
Hello.AddVideo(video3);
console.log("The Videos in Channel are");
console.log(Hello.viewVideoOfChannel());
