@title VuePress���ز��Է���
@rem 
@If not exist node_modules goto ins

@start http://localhost:8080
@echo ���Զ��������������δ�ɹ����������������ַ�����롰http://localhost:8080��
@echo ��ȴ�����vite vX.X.X devserver running at: ���ֺ�ȴ�����ˢ��ҳ�漴��
pnpm run docs:dev
exit

@:ins
@echo δ��⵽VuePress���������ڳ��԰�װ�����ڰ�װ��ɺ��ٴ��������ű�
@timeout /t 3 >nul
pnpm install
If not %errorlevel%==0 echo ������������pnpmָ���ȷ����ȫ�ְ�װ
@timeout /t 10 >nul
exit
