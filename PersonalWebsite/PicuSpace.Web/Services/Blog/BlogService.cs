using System.Diagnostics;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PicuSpace.Web.Services.Blog;

public interface IBlogService
{
    Task<IReadOnlyList<ArticleHeader>> GetArticleHeaders();
}

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

        if (articleResponse == null)
        {
            throw new ArgumentNullException(nameof(articleResponse));
        }

        return new List<ArticleHeader>(articleResponse.Data.Select(r =>
            new ArticleHeader(r.Id, r.Attributes.Title, r.Attributes.Description, r.Attributes.Slug, DateTime.Now)));
    }
}

public class ArticleResponse : StrapiResponse<ArticleResponse.Article>
{
    public class Article
    {
        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("slug")]
        public string Slug { get; set; }
        [JsonPropertyName("publishedAt")]
        public DateTime PublishedAt { get; set; }
    }
}

public class StrapiDataResponse<T>
{
    public int Id { get; set; }
    public T Attributes { get; set; }
}

public class StrapiResponse<TContent>
{
    public List<StrapiDataResponse<TContent>> Data { get; set; }
    // TODO Meta { get; set; }
}

public record ArticleHeader(int Id, string Title, string Description, string Slug, DateTime PublishDate);