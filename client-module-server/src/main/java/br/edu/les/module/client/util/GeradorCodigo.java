package br.edu.les.module.client.util;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class GeradorCodigo {

	public static String gerarCodigoUsuario() {
		Random random = new Random();
		LocalDateTime localDateTime = LocalDateTime.now();
		random.setSeed(localDateTime.getHour()
				+ localDateTime.getMinute()
				+ localDateTime.getSecond()
				+ localDateTime.getDayOfYear());
		String codigo = String.valueOf(random.nextInt(899999999)+100000000);
		return codigo;
	}
}