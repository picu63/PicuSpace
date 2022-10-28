using System.Net.Http.Json;
using System.Text.Json;

namespace PicuSpace.Web.Services.Blog;

public class BlogService : IBlogService
{
    private readonly HttpClient _client;

    public BlogService(IHttpClientFactory clientFactory)
    {
        _client = clientFactory.CreateClient(Consts.BlogApiHttpClientName);
    }
    public async Task<IReadOnlyList<ArticleHeader>> GetArticleHeaders()
    {
        var articleResponse = await _client.GetFromJsonAsync<ArticleResponse>("articles");
        Console.WriteLine(articleResponse);
        return null;
    }
}

public class ArticleResponse : StrapiResponse<ArticleResponse.Article>
{
    public class Article
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}

public class StrapiDataResponse<T>
{
    public int Id { get; set; }
    public T Attributes { get; set; }
}

public class StrapiResponse<T>
{
    public List<StrapiDataResponse<T>> Data { get; set; }
    // Meta { get; set; }
}

public interface IBlogService
{
    Task<IReadOnlyList<ArticleHeader>> GetArticleHeaders();
}

public record ArticleHeader(int Id, string Title, string Description, DateTime PublishDate);