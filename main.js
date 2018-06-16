var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtubeVideo = /** @class */ (function () {
    //ChannlName:string;
    function youtubeVideo(video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink) {
        var _this = this;
        //This function is when like button is clicked
        this.addLike = function () {
            _this.numberOfLikes = _this.numberOfLikes + 1;
        };
        this.addComment = function (comment) {
            _this.Comments.push(comment);
        };
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
    return youtubeVideo;
}());
var KidsVideo = /** @class */ (function (_super) {
    __extends(KidsVideo, _super);
    // private AgeLimitRestriction:Boolean;
    // private Genre:string;
    function KidsVideo(video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink, Genre, AgeLimitRestriction) {
        var _this = _super.call(this, video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink) || this;
        _this.Genre = Genre;
        _this.AgeLimitRestriction = AgeLimitRestriction;
        _this.video = video;
        _this.videoNmae = videoNmae;
        _this.videoLength = videoLength;
        _this.numberOfViwes = numberOfViwes;
        _this.numberOfLikes = numberOfLikes;
        _this.numberOfComments = numberOfComments;
        _this.Comments = Comments;
        _this.urlLink = urlLink;
        _this.AgeLimitRestriction = AgeLimitRestriction;
        _this.Genre = Genre;
        return _this;
    }
    return KidsVideo;
}(youtubeVideo));
var NormalVideo = /** @class */ (function (_super) {
    __extends(NormalVideo, _super);
    function NormalVideo(video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink, signInRequired, Genre) {
        var _this = _super.call(this, video, videoNmae, videoLength, numberOfViwes, numberOfLikes, numberOfComments, Comments, urlLink) || this;
        _this.video = video;
        _this.videoNmae = videoNmae;
        _this.videoLength = videoLength;
        _this.numberOfViwes = numberOfViwes;
        _this.numberOfLikes = numberOfLikes;
        _this.numberOfComments = numberOfComments;
        _this.Comments = Comments;
        _this.urlLink = urlLink;
        _this.signInRequired = signInRequired;
        _this.Genre = Genre;
        return _this;
    }
    return NormalVideo;
}(youtubeVideo));
var YoutubeChannel = /** @class */ (function () {
    function YoutubeChannel(ChannelName, numberOfSubcribers) {
        var _this = this;
        this.AddVideo = function (newVideo) {
            _this.VidoesInChannel.push(newVideo);
        };
        this.ChangeChannelName = function (NewName) {
            _this.ChannelName = NewName;
        };
        this.viewVideoOfChannel = function () {
            return _this.VidoesInChannel;
        };
        this.viewChannelName = function () {
            return _this.ChannelName;
        };
        //When new Subscriber Comes
        this.Subscriber = function () {
            _this.numberOfSubcribers = _this.numberOfSubcribers + 1;
        };
        this.ChannelName = ChannelName;
        this.VidoesInChannel = [];
        this.numberOfSubcribers = numberOfSubcribers;
    }
    return YoutubeChannel;
}());
var video1 = new KidsVideo("Abc", "Abc", 124, 22, 22, 3, ["Nice", "good"], "abc.com", "Comedy");
var video2 = new NormalVideo("Abcd", "Abcd", 124, 22, 22, 3, ["Nice", "good"], "abcd.com", true, "Comedy");
var video3 = new NormalVideo("Abcde", "Abcde", 125, 22, 22, 3, ["Nice", "good"], "abcd.com", true, "Comedy");
video3.addLike();
var Hello = new YoutubeChannel("Hello", 90);
console.log("The channel Name Earlier was " + Hello.viewChannelName());
Hello.ChangeChannelName("Hello World");
console.log("The channel Name after change is " + Hello.viewChannelName());
Hello.AddVideo(video1);
Hello.AddVideo(video2);
Hello.AddVideo(video3);
console.log("The Videos in Channel are");
console.log(Hello.viewVideoOfChannel());
