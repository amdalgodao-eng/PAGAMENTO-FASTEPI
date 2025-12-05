# Política de Segurança | Security Policy

## 🔒 Sobre este Projeto | About This Project

**PT-BR:**
Este é um projeto educacional para demonstrar funcionalidades de formulário interativo. **NÃO deve ser usado em ambiente de produção** para processar pagamentos reais.

**EN-US:**
This is an educational project to demonstrate interactive form functionalities. **It should NOT be used in production** to process real payments.

## ⚠️ Avisos de Segurança | Security Warnings

### PT-BR

1. **Dados Sensíveis**: Nunca armazene dados de cartão de crédito sem criptografia adequada
2. **Tokens Expostos**: Nunca exponha tokens, chaves de API ou credenciais no código front-end
3. **PCI Compliance**: Para processar pagamentos reais, implemente PCI DSS
4. **HTTPS**: Sempre use HTTPS em produção
5. **Backend Seguro**: Processe pagamentos através de backend seguro, nunca no front-end

### EN-US

1. **Sensitive Data**: Never store credit card data without proper encryption
2. **Exposed Tokens**: Never expose tokens, API keys or credentials in front-end code
3. **PCI Compliance**: To process real payments, implement PCI DSS
4. **HTTPS**: Always use HTTPS in production
5. **Secure Backend**: Process payments through secure backend, never on front-end

## 🛡️ Melhorias de Segurança Implementadas | Security Improvements Implemented

- ✅ Remoção de tokens expostos
- ✅ Validação aprimorada de entrada
- ✅ Uso de sessionStorage (temporário)
- ✅ Arquivo .env.example para configurações
- ✅ Atualização do .gitignore para dados sensíveis

## 📝 Relatando Vulnerabilidades | Reporting Vulnerabilities

**PT-BR:**
Se você encontrar vulnerabilidades de segurança neste projeto, por favor entre em contato com o desenvolvedor através do email no README.

**EN-US:**
If you find security vulnerabilities in this project, please contact the developer through the email in the README.

## 🔗 Recursos Recomendados | Recommended Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [PCI Security Standards](https://www.pcisecuritystandards.org/)
- [Stripe Documentation](https://stripe.com/docs/security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
