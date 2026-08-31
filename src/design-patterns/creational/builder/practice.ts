
interface IMethodAndUrl {
    setMethodAndUrl(method: string, url: string): IOptional;
}

interface IOptional {
    setHeaders(header: string): IOptional;
    setBody(body: Record<string, string>): IOptional;
    build(): HttpRequest
}

class HttpRequest {
    public method: string;
    public url: string;
    public headers: Record<string, string>;
    public body: Object;

    constructor() { }
}

class HttpRequestBuilder implements IMethodAndUrl, IOptional {
    private request: HttpRequest;
    constructor() {
        this.request = new HttpRequest();
    }
    setMethodAndUrl(method: string, url: string): IOptional {
        this.request.method = method;
        this.request.url = url;
        return this;
    }
    setHeaders(header: string): IOptional {
        let [key, val] = header.split(":");
        if (!key || val === undefined) {
            throw new Error("Invalid header format. Expected 'Key:Value'.");
        }
        this.request.headers[key] = val
        return this;
    }
    setBody(body: Object): IOptional {
        this.request.body = body
        return this
    }

    build() {
        return this.request;
    }
}

console.log(new HttpRequestBuilder().setMethodAndUrl('GET', 'google.com').build())
console.log(new HttpRequestBuilder().setMethodAndUrl('GET', 'google.com').setHeaders("cache:no-cache").setHeaders("api:xxxxxx").setBody({ "name": "Neeraj Gupta", age: "29" }).build())