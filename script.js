// Função para reproduzir áudio usando Web Speech API (Text-to-Speech)
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Português Brasileiro
    utterance.rate = 1.0; // Velocidade normal
    utterance.pitch = 1.0; // Tom normal
    utterance.volume = 1.0; // Volume máximo

    // Cancela qualquer áudio anterior
    speechSynthesis.cancel();

    // Reproduz o novo áudio
    speechSynthesis.speak(utterance);
}

// ============ NAVEGAÇÃO ENTRE SEÇÕES ============

function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function proceedToRegistration() {
    const consentCheckbox = document.getElementById('consent-checkbox');
    
    if (!consentCheckbox.checked) {
        alert('Por favor, marque a caixa de consentimento para continuar.');
        return;
    }

    showSection('registration-section');
}

function proceedToQuestionnaire() {
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const phone = document.getElementById('phone').value.trim();
    const minorCheckbox = document.getElementById('minor-checkbox');

    // Validação do formulário
    if (!name) {
        alert('Por favor, digite seu nome.');
        return;
    }

    if (!age || age < 13 || age > 120) {
        alert('Por favor, digite uma idade válida (entre 13 e 120 anos).');
        return;
    }

    if (!phone) {
        alert('Por favor, digite seu número de celular.');
        return;
    }

    // Validação para menores de 18 anos
    if (age < 18 && !minorCheckbox.checked) {
        alert('Você é menor de 18 anos. Por favor, confirme que tem a autorização de um responsável legal.');
        return;
    }

    // Armazena os dados do cadastro
    sessionStorage.setItem('userData', JSON.stringify({
        name: name,
        age: age,
        phone: phone
    }));

    // Mostra a seção de questionário
    showSection('questionnaire-section');
}

// Mostra/esconde o checkbox de menor de idade
document.getElementById('age').addEventListener('change', function() {
    const age = parseInt(this.value, 10);
    const minorConsentDiv = document.getElementById('minor-consent');
    
    if (age < 18) {
        minorConsentDiv.style.display = 'block';
    } else {
        minorConsentDiv.style.display = 'none';
        document.getElementById('minor-checkbox').checked = false;
    }
});

// ============ ATUALIZAÇÃO DE VALORES DOS SLIDERS ============

document.getElementById('p1').addEventListener('input', function() {
    document.getElementById('p1-value').textContent = this.value;
});

document.getElementById('p2').addEventListener('input', function() {
    document.getElementById('p2-value').textContent = this.value;
});

document.getElementById('p3').addEventListener('input', function() {
    document.getElementById('p3-value').textContent = this.value;
});

// ============ CÁLCULO DO SCORE ============

document.getElementById('screening-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let totalScore = 0;
    const form = event.target;

    // P1: Dor Menstrual (Cólica) - Escala 0-10, ponto de corte >= 6, coeficiente 11
    const p1Value = parseInt(document.getElementById('p1').value, 10);
    if (p1Value >= 6) {
        totalScore += 11;
    }

    // P2: Dor na Relação Sexual - Escala 0-10, ponto de corte >= 3, coeficiente 6
    const p2Value = parseInt(document.getElementById('p2').value, 10);
    if (p2Value >= 3) {
        totalScore += 6;
    }

    // P3: Sintomas Intestinais - Escala 0-10, ponto de corte >= 5, coeficiente 14
    const p3Value = parseInt(document.getElementById('p3').value, 10);
    if (p3Value >= 5) {
        totalScore += 14;
    }

    // P4: Sintomas Urinários
    const p4Checked = form.querySelector('input[name="p4"]:checked');
    if (p4Checked) {
        totalScore += parseInt(p4Checked.value, 10);
    }

    // P5: Histórico Familiar
    const p5Checked = form.querySelector('input[name="p5"]:checked');
    if (p5Checked) {
        totalScore += parseInt(p5Checked.value, 10);
    }

    // P6: Infertilidade Primária
    const p6Checked = form.querySelector('input[name="p6"]:checked');
    if (p6Checked) {
        totalScore += parseInt(p6Checked.value, 10);
    }

    // P7: Fadiga Crônica
    const p7Checked = form.querySelector('input[name="p7"]:checked');
    if (p7Checked) {
        totalScore += parseInt(p7Checked.value, 10);
    }

    // P8: Sangramento Intenso
    const p8Checked = form.querySelector('input[name="p8"]:checked');
    if (p8Checked) {
        totalScore += parseInt(p8Checked.value, 10);
    }

    // Exibe o resultado
    displayResult(totalScore);
});

function displayResult(totalScore) {
    const resultArea = document.getElementById('result-area');
    const scoreValue = document.getElementById('score-value');
    const riskLevel = document.getElementById('risk-level');
    const recommendation = document.getElementById('recommendation');
    const whatsappSection = document.getElementById('whatsapp-section');

    scoreValue.textContent = totalScore;

    // Remove classes de risco anteriores
    recommendation.classList.remove('risk-low', 'risk-elevated', 'risk-very-elevated');
    whatsappSection.classList.add('hidden');

    // Determina o nível de risco e a recomendação
    if (totalScore >= 25) {
        riskLevel.textContent = '⚠️ Nível de Risco: MUITO ELEVADO';
        recommendation.textContent = 'A pontuação indica uma alta probabilidade de endometriose (Especificidade esperada de 91%). Encaminhamento imediato para investigação diagnóstica é recomendado. Procure um médico especialista em ginecologia ou endometriose.';
        recommendation.classList.add('risk-very-elevated');
        whatsappSection.classList.remove('hidden');
    } else if (totalScore >= 18) {
        riskLevel.textContent = '⚠️ Nível de Risco: ELEVADO';
        recommendation.textContent = 'A pontuação sugere um risco elevado de endometriose (Sensibilidade esperada de 73% e Especificidade de 75%). Recomenda-se fortemente o agendamento de uma consulta com especialista para avaliação clínica e exames de imagem (ultrassom transvaginal ou ressonância magnética).';
        recommendation.classList.add('risk-elevated');
        whatsappSection.classList.remove('hidden');
    } else {
        riskLevel.textContent = '✓ Nível de Risco: BAIXO A MODERADO';
        recommendation.textContent = 'A probabilidade de endometriose é baixa com base neste questionário. Recomenda-se acompanhamento médico de rotina. Caso os sintomas persistam ou piorem, procure um médico para avaliação.';
        recommendation.classList.add('risk-low');
    }

    resultArea.classList.remove('hidden');
    showSection('result-section');
}

// ============ RESET DO FORMULÁRIO ============

function resetForm() {
    // Reseta o formulário de triagem
    document.getElementById('screening-form').reset();
    document.getElementById('p1-value').textContent = '0';
    document.getElementById('p2-value').textContent = '0';
    document.getElementById('p3-value').textContent = '0';
    document.getElementById('result-area').classList.add('hidden');

    // Volta para a seção de cadastro
    showSection('registration-section');
}

// ============ LEITURA DE VALORES ALTERADOS ============

document.getElementById('p1').addEventListener('change', function() {
    speakText(`Dor menstrual: ${this.value} em 10`);
});

document.getElementById('p2').addEventListener('change', function() {
    speakText(`Dor na relação sexual: ${this.value} em 10`);
});

document.getElementById('p3').addEventListener('change', function() {
    speakText(`Dor intestinal: ${this.value} em 10`);
});

// ============ INICIALIZAÇÃO ============

// Mostra a seção de consentimento ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    showSection('consent-section');
});
