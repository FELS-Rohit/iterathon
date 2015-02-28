import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import java.io.FileInputStream;
import java.util.Properties;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder;

public class MockService {

	private WireMockServer server;

	public MockService() {
	}

	public static void main(String[] args) {
		MockService mockSerivce = new MockService();
		mockSerivce.start();
	}

	private void start() {
		server = new WireMockServer(8080);

		server.start();

		addStub("/alarms", "get-alarms");
		addStub("/light", "get-light");
	}

	private void addStub(String url, String propertyKey) {
		ResponseDefinitionBuilder response = buildResponseFromPropertyFile(propertyKey);

		addCorsHeaders(response);

		server.stubFor(get(urlEqualTo(url)).willReturn(response));
	}

	private ResponseDefinitionBuilder buildResponseFromPropertyFile(String key) {
		try {
			Properties p = new Properties();
			p.load(getClass().getResourceAsStream("/response.properties"));
			Object value = p.get(key);

			return aResponse().withStatus(200).withBody(value.toString());
		} catch (Exception e) {
			return buildFailure();
		}
	}

	private void addCorsHeaders(ResponseDefinitionBuilder response) {
		response.withHeader("Access-Control-Allow-Origin", "*");
	}

	private ResponseDefinitionBuilder buildFailure() {
		return aResponse().withStatus(500);
	}
}
