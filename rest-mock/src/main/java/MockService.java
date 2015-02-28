import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import java.io.FileInputStream;
import java.util.Properties;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder;

public class MockService {

	public MockService() {
	}

	public static void main(String[] args) {
		MockService mockSerivce = new MockService();
		mockSerivce.start();
	}

	private void start() {
		WireMockServer server = new WireMockServer(8080);
		server.start();

		server.stubFor(get(urlEqualTo("/alarms")).willReturn(
				buildResponseFromPropertyFile("get-alarms")));
	}

	private ResponseDefinitionBuilder buildResponseFromPropertyFile(String key) {
		try {
			Properties p = new Properties();
			p.load(getClass().getResourceAsStream("/response.properties"));
			Object value = p.get(key);

			return aResponse().withStatus(200).withBody(value.toString())
					;
		} catch (Exception e) {
			return buildFailure();
		}
	}

	private ResponseDefinitionBuilder buildFailure() {
		return aResponse().withStatus(500);
	}
}
